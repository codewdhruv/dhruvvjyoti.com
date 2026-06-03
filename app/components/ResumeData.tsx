export function ResumeData() {
  const resumeData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhrubajyoti Chakraborty",
    "alternateName": "Dhruv",
    "url": "https://codewdhruv.com",
    "description": "Product Manager at Harness.io specializing in AI-native software delivery platforms",
    "jobTitle": "Product Manager",
    "worksFor": {
      "@type": "Organization",
      "name": "Harness.io",
      "url": "https://harness.io"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Product Manager",
      "description": "Driving SEI 2.0 — building engineering analytics grounded in AI-native abstractions"
    },
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "SEI 2.0 - Engineering Analytics Platform",
        "description": "AI-native engineering analytics platform",
        "dateCreated": "2025",
        "creator": {
          "@type": "Person",
          "name": "Dhrubajyoti Chakraborty"
        }
      },
      {
        "@type": "CreativeWork", 
        "name": "InsightX - AI Code Tools Introspection",
        "description": "Introspection layer for AI code tools like Copilot",
        "dateCreated": "2024",
        "creator": {
          "@type": "Person",
          "name": "Dhrubajyoti Chakraborty"
        }
      },
      {
        "@type": "CreativeWork",
        "name": "Harness AIDA - AI Assistant",
        "description": "AI assistant for support pattern recognition",
        "dateCreated": "2023",
        "creator": {
          "@type": "Person", 
          "name": "Dhrubajyoti Chakraborty"
        }
      }
    ],
    "knowsAbout": [
      "Machine Learning",
      "Product Management",
      "Developer Relations", 
      "Software Engineering",
      "AI-powered Engineering Analytics",
      "Cloud Native Development",
      "Reasoning Systems",
      "Engineering Metrics",
      "CI/CD",
      "Neural Networks",
      "Developer Experience",
      "System Architecture"
    ],
    "hasCredential": [
      "Machine Learning Engineer",
      "Developer Relations Engineer", 
      "Software Engineer",
      "Product Manager"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Commudle"
      }
    ],
    "sameAs": [
      "https://linkedin.com/in/dhruvvjyoti",
      "https://www.youtube.com/@codewdhruv",
      "https://codewdhruv.substack.com"
    ],
    "knowsLanguage": ["English", "Hindi", "Assamese"],
    "nationality": "Indian",
    "birthPlace": {
      "@type": "Place",
      "name": "Assam, India"
    },
    "currentLocation": {
      "@type": "Place", 
      "name": "India"
    },
    "publisher": {
      "@type": "Organization",
      "name": "codewdhruv.com",
      "url": "https://codewdhruv.com"
    },
    "author": {
      "@type": "Person",
      "name": "Dhrubajyoti Chakraborty"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeData) }}
    />
  );
} 