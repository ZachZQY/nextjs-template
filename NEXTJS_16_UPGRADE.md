# Next.js 16 升级指南

## 📋 升级概览

本项目已成功从 Next.js 15.3.4 升级到 **Next.js 16.1.1**，修复了安全漏洞（CVE-2025-66478）。

## 🔥 主要变化

### 1. **Turbopack 成为默认打包器**
- ✅ **已启用**：项目已使用 `--turbopack` 标志
- **优势**：构建速度提升 2-5 倍，Fast Refresh 性能提升 10 倍
- **影响**：开发体验更流畅，构建更快

### 2. **React 19.2 内置支持**
- ✅ **已兼容**：项目使用 React 19.0.0，已自动更新到 19.1.0
- **新特性**：
  - View Transitions API
  - `useEffectEvent()` Hook
  - `<Activity />` 组件
- **影响**：可以使用 React 19 的新特性

### 3. **React 编译器集成**
- **新功能**：自动记忆化组件，减少不必要的重新渲染
- **使用方式**：自动启用，无需额外配置
- **影响**：运行时性能自动优化

### 4. **新的缓存 API**
- **新增**：`updateTag()` 和 `refresh()` API
- **新增**：`"use cache"` 指令用于显式缓存声明
- **影响**：更精细的缓存控制

### 5. **路由与导航优化**
- **布局去重**：减少重复布局代码
- **增量预取**：更智能的页面预加载
- **影响**：页面导航速度提升

## ⚠️ 破坏性变更

### 1. **异步 API 变更** ⚠️
以下 API 现在是**异步的**，必须使用 `await`：

```typescript
// ❌ Next.js 15 (旧方式)
import { cookies, headers } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const headersList = headers();
}

// ✅ Next.js 16 (新方式)
import { cookies, headers } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const headersList = await headers();
}
```

**影响范围**：
- `cookies()` - 需要 `await`
- `headers()` - 需要 `await`
- `draftMode()` - 需要 `await`

**✅ 当前项目状态**：项目中未使用这些 API，无需修改。

### 2. **配置变更**

#### `next.config.ts` 变更
- ❌ **移除**：`eslint` 配置项（不再支持在配置文件中设置）
- ✅ **已修复**：已从配置中移除 `eslint` 配置
- ✅ **已更新**：`images.domains` → `images.remotePatterns`

```typescript
// ❌ Next.js 15
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['example.com'],
  },
};

// ✅ Next.js 16
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
};
```

### 3. **移除的功能**
- ❌ **AMP 支持**：已完全移除
- ❌ **`next lint` 命令**：已移除（需要使用独立的 ESLint）
  - ✅ **已更新**：package.json 中的 lint 脚本已更新为使用 ESLint 直接运行
  - ⚠️ **注意**：ESLint 配置可能需要调整以兼容新的 flat config 格式
- ❌ **`serverRuntimeConfig` 和 `publicRuntimeConfig`**：使用环境变量替代

### 4. **版本要求**
- **Node.js**：最低要求 20.9+
- **TypeScript**：最低要求 5.1+
- ✅ **当前状态**：项目已满足要求

## ✅ 已完成的修复

1. ✅ **更新 Next.js**：15.3.4 → 16.1.1
2. ✅ **更新 eslint-config-next**：15.3.4 → 16.1.1
3. ✅ **修复 next.config.ts**：
   - 移除 `eslint` 配置项
   - 更新 `images.domains` → `images.remotePatterns`
4. ✅ **构建测试**：构建成功，所有路由正常

## 🔍 需要检查的地方

### 1. **API 路由中的异步 API**
如果项目中有使用以下 API，需要添加 `await`：

```typescript
// 检查是否有使用这些 API
import { cookies, headers, draftMode } from 'next/headers';

// 如果使用了，需要改为：
const cookieStore = await cookies();
const headersList = await headers();
const draft = await draftMode();
```

**当前状态**：✅ 项目中未使用这些 API

### 2. **服务器组件中的异步操作**
确保所有服务器组件中的异步操作都正确使用 `await`：

```typescript
// ✅ 正确
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

### 3. **环境变量使用**
如果之前使用了 `serverRuntimeConfig` 或 `publicRuntimeConfig`，需要迁移到环境变量：

```typescript
// ❌ 旧方式
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

// ✅ 新方式
const config = process.env.MY_CONFIG;
```

## 📚 新特性使用示例

### 1. **使用 "use cache" 指令**

```typescript
// 显式声明缓存
async function getData() {
  "use cache";
  const res = await fetch('https://api.example.com/data');
  return res.json();
}
```

### 2. **使用新的缓存 API**

```typescript
import { revalidateTag, revalidatePath } from 'next/cache';

// 更新特定标签的缓存
await revalidateTag('products');

// 更新特定路径的缓存
await revalidatePath('/products');
```

### 3. **使用 React 19 新特性**

```typescript
'use client';

import { useEffectEvent } from 'react';

export function Component() {
  const handleClick = useEffectEvent(() => {
    // 这个函数不会因为依赖变化而重新创建
    console.log('clicked');
  });
  
  return <button onClick={handleClick}>Click</button>;
}
```

## 🧪 测试建议

1. **功能测试**：
   ```bash
   pnpm run dev
   ```
   测试所有页面和 API 路由是否正常工作

2. **构建测试**：
   ```bash
   pnpm run build
   ```
   确保生产构建成功

3. **代码检查**：
   ```bash
   pnpm run lint
   ```
   ⚠️ **注意**：Next.js 16 移除了 `next lint` 命令，已更新为直接使用 ESLint。
   如果遇到配置问题，可以暂时跳过 lint 检查，不影响构建和运行。

## 📖 参考资源

- [Next.js 16 官方升级指南](https://nextjs.org/docs/app/building-your-application/upgrading/version-16)
- [Next.js 16 发布说明](https://nextjs.org/blog/next-16)
- [React 19 文档](https://react.dev/blog/2024/04/25/react-19)
- [Turbopack 文档](https://nextjs.org/docs/app/api-reference/next-config-js/turbopack)

## 🎯 总结

✅ **升级成功**：项目已成功升级到 Next.js 16.1.1
✅ **安全修复**：CVE-2025-66478 漏洞已修复
✅ **配置更新**：所有配置已适配 Next.js 16
✅ **构建正常**：生产构建测试通过

**下一步**：
1. 全面测试应用功能
2. 考虑使用 Next.js 16 的新特性优化性能
3. 关注官方更新，及时应用安全补丁
