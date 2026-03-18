export function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          Vite + React + Router + Tailwind
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          可维护、可扩展的前端工程起步模板
        </h1>
        <p className="max-w-3xl text-slate-600">
          这套结构按“应用壳、路由层、页面层、共享层”拆分，支持团队协作时的低耦合和高可读性。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="font-medium text-slate-900">路由集中管理</h2>
          <p className="mt-2 text-sm text-slate-600">统一在 router 目录维护路由，页面组件只关注业务渲染。</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="font-medium text-slate-900">目录职责清晰</h2>
          <p className="mt-2 text-sm text-slate-600">页面、布局、共享常量和后续功能模块可以持续演进。</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="font-medium text-slate-900">别名降低心智负担</h2>
          <p className="mt-2 text-sm text-slate-600">使用 @ 指向 src，避免层级变深后的相对路径噪音。</p>
        </article>
      </div>
    </section>
  )
}
