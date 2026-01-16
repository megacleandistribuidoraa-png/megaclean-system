# ⚡ Solução Rápida - Erro de Build

## ❌ Erro:
```
npm error Missing script: "build: frontend"
```

## ✅ Solução Rápida:

### 1. No Render, vá em Settings do Static Site

### 2. Encontre "Build Command"

### 3. Altere para (escolha uma opção):

**Opção A - Usar script build:frontend:**
```
npm install && API_URL=${API_URL} npm run build:frontend
```
⚠️ **IMPORTANTE**: Sem espaço após `build:` - deve ser `build:frontend` não `build: frontend`

**Opção B - Usar script build (mais simples):**
```
npm install && API_URL=${API_URL} npm run build
```

### 4. Salve

### 5. Faça novo deploy (Manual Deploy)

---

## 🔍 Verificar package.json

O repositório é: `megacleandistribuidoraa-png / Zentra-Tech`

**Verifique se o package.json tem:**

```json
{
  "scripts": {
    "build:frontend": "node build-frontend.js",
    "build": "node build-frontend.js"
  }
}
```

**Se não tiver, adicione e faça commit!**

---

## ✅ Depois

- Build deve funcionar
- Aguardar 2-5 minutos
- Verificar logs para confirmar sucesso

---

**Ação imediata**: Corrigir Build Command no Render (remover espaço ou usar `npm run build`)
