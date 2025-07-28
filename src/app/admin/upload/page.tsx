"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/customs/card";
import { Textfield } from "@/customs/textfield";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AdminUploadPage() {
  const [inputType, setInputType] = useState("password");
  return (
    <Card className="max-w-[800px] mx-auto">
      <h1 className="text-indigo-300 font-bold text-2xl">Update data</h1>
      <div className="p-2 mt-5">
        <form>
          <div className="flex items-center gap-2">
            <Textfield
              type={inputType}
              placeholder="Enter access key"
              className="text-white"
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
            <Button
              variant="secondary"
              type="submit"
              className="font-semibold text-indigo-100"
            >
              Verify
            </Button>
          </div>
        </form>
        <div className="mt-5">
          <form>
            <Input type="file" className="text-white file:text-white" />
          </form>
        </div>
      </div>
    </Card>
  );
}
