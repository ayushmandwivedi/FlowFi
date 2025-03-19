import { Button } from "@/components/ui/button";
import { Auth } from "../../../components/Auth";

export default function Signup() {
  return (
    <div>
      <Auth type="signup"></Auth>
      <Button>Hello there</Button>
    </div>
  );
}
