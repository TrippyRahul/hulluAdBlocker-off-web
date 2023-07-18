import Script from "next/script";

export default function Schema() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to get hulu without ads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you get spammed with ads and thinking how to get hulu without ads, then let us tell you that by installing it, you can get rid of annoying ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why are there ads on hulu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There are ads on Hulu because ads help generate revenue for Hulu. But installing the extension, it will remove ads from hulu.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you get hulu without ads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! By simply downloading and installing, you can get hulu commercial free and enhance your experience with hulu no commercials.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to remove ads in hulu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Don’t freak out as we have the answer to your how to skip hulu ads question! The extension is designed especially for you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to get rid of ads on hulu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "All you need to do is download the extension. By this you can watching your favorite content.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why does hulu have so many ads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hulu has so many ads because it is a primary source of income for Hulu. But after having so many ads you can still enjoy your favorite movies by simply installing hulu ad blolcker.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
}
