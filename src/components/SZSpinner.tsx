import Image from "next/image";

export function SZSpinner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/images/servant-zero-logo.png"
        alt="Loading..."
        width={48}
        height={48}
        className="rounded-full animate-spin"
      />
    </div>
  );
}
