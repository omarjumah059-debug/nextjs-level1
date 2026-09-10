export default function AboutProjectPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-5">
      <h1 className="text-4xl font-bold">Project structure</h1>
      <p className="leading-7 text-[#526053]">
        <code>app</code> contains routes and layouts. <code>public</code> holds
        static files. <code>next.config.ts</code> controls framework settings,
        while <code>package.json</code> stores scripts and dependencies and{" "}
        <code>tsconfig.json</code> configures TypeScript.
      </p>
      <p className="leading-7 text-[#526053]">
        Shared interface pieces live in <code>components</code>, reusable data
        and helpers live in <code>lib</code>, and server-only configuration
        lives in <code>server</code>.
      </p>
    </section>
  );
}
