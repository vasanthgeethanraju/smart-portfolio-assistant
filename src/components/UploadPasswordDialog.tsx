import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type UploadPasswordDialogProps = {
  fileName: string | null;
  onCancel: () => void;
  onSubmit: (password: string) => void;
};

const UploadPasswordDialog = ({ fileName, onCancel, onSubmit }: UploadPasswordDialogProps) => {
  const [password, setPassword] = useState("");

  const close = () => {
    setPassword("");
    onCancel();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    onSubmit(password);
    setPassword("");
  };

  return (
    <Dialog open={fileName !== null} onOpenChange={(isOpen) => {
      if (!isOpen) close();
    }}>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Upload password</DialogTitle>
            <DialogDescription>
              Enter the upload password to add {fileName} to the assistant.
            </DialogDescription>
          </DialogHeader>

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            autoFocus
          />

          <DialogFooter>
            <Button type="button" variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" disabled={!password}>
              Upload
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPasswordDialog;
