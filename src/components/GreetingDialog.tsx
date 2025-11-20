import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type GreetingDialogProps = {
  open: boolean;
  greeting: string;
  greetingIcon: string;
  onClose: () => void;
};

const GreetingDialog = ({ open, greeting, greetingIcon, onClose }: GreetingDialogProps) => (
  <Dialog open={open} onOpenChange={(isOpen) => {
    if (!isOpen) onClose();
  }}>
    <DialogContent className="space-y-4">
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold flex items-center gap-3">
          <span>Hi! {greeting}</span>
          <span className="text-3xl" role="img" aria-hidden="true">
            {greetingIcon}
          </span>
        </DialogTitle>
        <DialogDescription className="text-base text-muted-foreground">
          I built this smart portfolio to give you a conversational way to get to know my work, projects, and how I think.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-3 text-sm">
        <p className="text-foreground">
          If you&apos;re a recruiter or hiring manager, feel free to ask about my experience, design decisions, or how I approach solving complex problems.
        </p>

        <div className="rounded-lg border border-dashed border-accent/40 bg-accent/5 p-3 text-muted-foreground">
          Tip: Start with <span className="font-medium text-foreground">“What makes Vasanth a good fit for [role]?”</span> or <span className="font-medium text-foreground">“Summarize his background.”</span>
        </div>
      </div>

      <DialogFooter>
        <Button onClick={onClose} className="w-full sm:w-auto">
          Start chatting
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default GreetingDialog;

