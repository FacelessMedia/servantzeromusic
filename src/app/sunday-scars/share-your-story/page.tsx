import type { Metadata } from "next";
import { Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Share Your Story — Sunday Scars",
  description:
    "Have you experienced church hurt? Share your story with Sunday Scars. Every guest receives a custom song from Servant Zero.",
};

export default function ShareYourStoryPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 border-2 border-primary/40 mb-6">
            <Mic className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Share Your Story
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Have you experienced church hurt? Your story matters. This is not a
            platform for revenge or exposure. It&apos;s a space to be heard,
            honored, and pointed toward hope.
          </p>
          <p className="text-sm text-primary mt-3 font-semibold">
            Every guest receives a custom song as a thank-you for their courage.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Your Name (or a pseudonym)
            </label>
            <input
              id="name"
              type="text"
              placeholder="How would you like to be called?"
              className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="story" className="block text-sm font-medium text-foreground mb-2">
              Brief Summary of Your Story
            </label>
            <textarea
              id="story"
              rows={6}
              placeholder="Share as much or as little as you'd like. What happened? How did it affect you? Where are you now?"
              className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
            />
          </div>

          <div>
            <label htmlFor="howFound" className="block text-sm font-medium text-foreground mb-2">
              How did you find Sunday Scars?
            </label>
            <input
              id="howFound"
              type="text"
              placeholder="YouTube, social media, a friend, etc."
              className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              className="mt-1 w-4 h-4 rounded border-border bg-card text-primary focus:ring-primary"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
              I understand that my story may be shared on the Sunday Scars
              podcast. I consent to being contacted about appearing on the show.
              My identity can remain anonymous if I choose.
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-md hover:bg-crimson-500 transition-colors text-lg"
          >
            Submit Your Story
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Your story is safe. We will never share your information without
            your explicit consent.
          </p>
        </form>
      </div>
    </section>
  );
}
