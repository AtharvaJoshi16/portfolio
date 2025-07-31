"use client";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button as CoreButton } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Button, Button as GradientButton } from "@/customs/button";
import { Card } from "@/customs/card";
import { Textfield } from "@/customs/textfield";
import axios from "axios";
import classNames from "classnames";
import {
  CheckCircle,
  Eye,
  EyeOff,
  Loader2,
  Upload,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function AdminUploadPage() {
  const [inputType, setInputType] = useState("password");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [accessKeyValue, setAccessKeyValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifyDisabled, setVerifyDisabled] = useState(true);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File>();
  const [err, setErr] = useState("");
  const handleAccessKeyValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccessKeyValue(e.target.value);
    const regex = /^.{12,}@\d{4,}-\d{4,}$/i;
    if (regex.test(e.target.value)) {
      setVerifyDisabled(false);
    } else {
      setVerifyDisabled(true);
    }
  };

  const handleVerification = async () => {
    try {
      setErr("");
      setVerifyLoading(true);
      const res = await axios.post("/api/verify-access-key", {
        accessKey: accessKeyValue,
      });
      if (res.data?.verified) {
        setIsVerified(true);
        setInputType("password");
        setInputDisabled(true);
      }
    } catch (e: any) {
      setErr(e?.response?.data?.error ?? "Internal server error");
    } finally {
      setVerifyLoading(false);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    setErr("");
    const formData = new FormData();
    formData.append("resume", file as Blob);
    try {
      if (!file) {
        setErr("File is required");
        return;
      } else if (file?.type !== "application/pdf") {
        setErr("File type must be PDF");
      } else if (file?.size! > 5 * 1024 * 1024) {
        setErr("File size must not exceed 5MB");
      } else {
        const res = await axios.post("/api/upload-resume", formData, {
          headers: {
            "X-Access-Key": accessKeyValue,
          },
        });
        if (res.status === 204) {
          setUploaded(true);
        }
      }
    } catch (e: any) {
      if (e?.status === 401) {
        setErr("Not authorized");
      }
      setUploaded(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      {err && (
        <Alert variant="destructive" className="w-[600px]">
          <AlertTitle className="font-semibold text-red-800 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <XCircle className="text-red-800" />
              {err}
            </div>
            <CoreButton variant="ghost" size="icon" onClick={() => setErr("")}>
              <X />
            </CoreButton>
          </AlertTitle>
        </Alert>
      )}
      <Card className="w-full md:w-[800px] mx-auto">
        <h1 className="text-indigo-300 font-bold text-2xl text-center">
          Update your resume
        </h1>
        <div className="p-2 mt-5">
          <div className="flex items-center gap-2 flex-col md:flex-row">
            <Textfield
              type={inputType}
              value={accessKeyValue}
              disabled={inputDisabled}
              onChange={handleAccessKeyValueChange}
              placeholder="Enter access key"
              className="text-white font-semibold"
              endIcon={
                inputType === "password" ? (
                  <EyeOff
                    onClick={() => setInputType("text")}
                    className={classNames("text-slate-300", {
                      "pointer-events-none opacity-60": isVerified,
                    })}
                  />
                ) : (
                  <Eye
                    onClick={() => setInputType("password")}
                    className={classNames("text-slate-300", {
                      "pointer-events-none opacity-60": isVerified,
                    })}
                  />
                )
              }
            />
            {isVerified ? (
              <GradientButton
                disabled
                className="flex items-center gap-2 text-white font-bold w-fit"
              >
                <CheckCircle className="text-green-400" />
                VERIFIED
              </GradientButton>
            ) : (
              <GradientButton
                className="font-semibold text-indigo-100 flex items-center justify-center gap-2"
                disabled={verifyDisabled || verifyLoading}
                onClick={handleVerification}
              >
                {verifyLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    VERIFYING
                  </>
                ) : (
                  "VERIFY"
                )}
              </GradientButton>
            )}
          </div>
          {isVerified && (
            <div className="mt-5 flex flex-col items-center gap-2">
              <FileUpload
                label="Upload your resume"
                description="Drop your resume here or click to choose"
                onChange={(files) => setFile(files[0])}
                onDelete={() => {
                  setUploaded(false);
                }}
              />
              {uploaded ? (
                <Button
                  className="flex items-center gap-2"
                  disabled
                  onClick={handleUpload}
                >
                  <CheckCircle size={20} />
                  UPLOADED
                </Button>
              ) : (
                <Button
                  className="flex items-center gap-2"
                  disabled={!file || uploading}
                  onClick={handleUpload}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      UPLOADING
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      UPLOAD
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
