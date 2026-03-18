export function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">关于项目结构</h1>
      <p className="text-slate-600">
        你可以继续在 src 下增加 features 目录，按业务域拆分模块（例如 auth、profile、job），每个模块内独立维护组件、hooks、api 和 types。
      </p>
      <p className="text-slate-600">
        当页面复杂度上升时，再引入状态管理和请求层封装，也不会破坏当前目录边界。
      </p>
    </section>
  )
}
