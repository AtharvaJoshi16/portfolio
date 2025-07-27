import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/customs/card";

export default function AdminUploadPage() {
  return (
    <Card className="max-w-[800px] mx-auto">
      <h1 className="text-indigo-300 font-bold text-2xl">Update data</h1>
      <div className="p-2 mt-5">
        <form>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Enter access key"
              className="text-white border-500-200"
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
      </div>
    </Card>
  );
}
