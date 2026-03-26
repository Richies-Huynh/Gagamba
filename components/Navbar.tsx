import {ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Navbar() {
  return (
    <ClerkProvider>
      <header style={{backgroundColor: '#001137'}} className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton>
            <SecondaryButton message={"Sign In"}/>
          </SignInButton>
          <SignUpButton>
            <PrimaryButton message={"Sign Up"}/>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </ClerkProvider>
  );
}