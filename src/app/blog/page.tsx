import { Mailchimp } from "@/components";
import { Column, Heading } from "@/once-ui/components";
import { blog, newsletter } from "../resources";

export default function Blog() {
  return (
    <Column maxWidth="s">
      {/* ... existing metadata script ... */}

      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>

      <Column fillWidth flex={1} gap="xl">
        {blog.posts.map((post) => (
          <article
            key={post.url}
            style={{
              marginBottom: "2rem",
              position: "relative",
              border: post.title.includes("$1000")
                ? "2px solid #ffd700"
                : "none",
              borderRadius: "8px",
              padding: post.title.includes("$1000") ? "1.5rem" : "0",
              background: post.title.includes("$1000")
                ? "linear-gradient(45deg, #000000, #000000)"
                : "transparent",
            }}
          >
            {/* Winner badge */}
            {post.title.includes("$1000") && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  background: "#ffd700",
                  color: "#000",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                🏆 Award Winner
              </div>
            )}

            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                />
              )}

              <Heading
                variant="heading-strong-m"
                marginBottom="xs"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {post.title.includes("$1000") && (
                  <span style={{ color: "#ffd700" }}>★</span>
                )}
                {post.title}
              </Heading>

              <p
                style={{
                  margin: "0.25rem 0 0.5rem",
                  fontSize: "0.9rem",
                  color: "#666",
                  fontWeight: "500",
                }}
              ></p>

              <p
                style={{
                  margin: "0",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#9d9d9d",
                }}
              >
                {post.excerpt}
              </p>
            </a>
          </article>
        ))}
      </Column>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
