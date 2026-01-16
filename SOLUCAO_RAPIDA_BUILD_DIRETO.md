# ⚡ Solução Rápida - Build Command Direto

## ❌ Erro Atual:
```
npm error Missing script: "build"
```

## ✅ Solução Imediata:

### No Render, altere o Build Command para:

```
npm install && API_URL=${API_URL} node build-frontend.js
```

**O que mudou:**
- ❌ Antes: `npm run build` (precisa do script no package.json)
- ✅ Agora: `node build-frontend.js` (executa direto)

---

## 📝 Passo a Passo:

1. **Render Dashboard** → Static Site `erp-system-frontend`
2. **Settings** → **Build & Deploy**
3. **Build Command** → Clique em **"Edit"**
4. **Substitua por:**
   ```
   npm install && API_URL=${API_URL} node build-frontend.js
   ```
5. **Salve**
6. **Manual Deploy** → **Deploy latest commit**

---

## ⚠️ Pré-requisito:

O arquivo `build-frontend.js` **DEVE existir** na raiz do repositório `Zentra-Tech`.

**Se não existir**, você precisa:
1. Adicionar o arquivo ao repositório
2. Fazer commit e push

---

## ✅ Depois:

- Build deve funcionar
- Aguardar 2-5 minutos
- Verificar logs

---

**Ação**: Altere Build Command para `node build-frontend.js` (sem npm run)!
