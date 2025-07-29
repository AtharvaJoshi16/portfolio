"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/customs/card";
import { Textfield } from "@/customs/textfield";
import axios from "axios";
import { CheckCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";

export default function AdminUploadPage() {
  const [inputType, setInputType] = useState("password");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [accessKeyValue, setAccessKeyValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifyDisabled, setVerifyDisabled] = useState(true);
  const [verifyLoading, setVerifyLoading] = useState(false);
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
      setVerifyLoading(true);
      const res = await axios.post("/api/verify-access-key", {
        accessKey: accessKeyValue,
      });
      if (res.data?.verified) {
        setIsVerified(true);
        setInputType("password");
        setInputDisabled(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setVerifyLoading(false);
    }
  };

  return (
    <Card className="max-w-[800px] mx-auto">
      <h1 className="text-indigo-300 font-bold text-2xl">Update data</h1>
      <div className="p-2 mt-5">
        <div className="flex items-center gap-2">
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
                  className="text-slate-300"
                />
              ) : (
                <Eye
                  onClick={() => setInputType("password")}
                  className="text-slate-300"
                />
              )
            }
          />
          {isVerified ? (
            <Button
              variant="ghost"
              disabled
              className="flex items-center gap-2 text-white font-bold"
            >
              <CheckCircle className="text-green-500" />
              Verified
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="font-semibold text-indigo-100 flex items-center gap-2"
              disabled={verifyDisabled || verifyLoading}
              onClick={handleVerification}
            >
              {verifyLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Verifying
                </>
              ) : (
                "Verify"
              )}
            </Button>
          )}
        </div>
        {isVerified && (
          <div className="mt-5">
            <Input type="file" className="text-white file:text-white" />
          </div>
        )}
      </div>
    </Card>
  );
}
