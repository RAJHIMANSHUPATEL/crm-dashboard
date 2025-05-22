import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button>
        <ClipboardCheck />
        Click ME
      </Button>
    </div>
  );
}
