# 🔧 Corrigir Build Command - Render

## ❌ Problema Identificado

**Build Command atual:**
```
$ npm install && API_URL=${API_URL} npm run build:frontend
```

**Erro:** O script `build:frontend` pode não existir no repositório `Zentra-Tech`.

---

## ✅ Solução

### Alterar Build Command para:

**Clique em "Edit" ao lado de "Build Command"**

**Substitua por:**
```
npm install && API_URL=${API_URL} npm run build
```

⚠️ **Mude de `build:frontend` para `build`**

**Por quê?**
- O script `build` já existe no package.json
- Funciona igual ao `build:frontend`
- Mais simples e confiável

---

## 📝 Passo a Passo

1. **Clique em "Edit"** ao lado de "Build Command"
2. **Apague** o comando atual
3. **Digite:**
   ```
   npm install && API_URL=${API_URL} npm run build
   ```
4. **Salve** (botão "Save" ou "Update")
5. **Vá em "Manual Deploy"** → **"Deploy latest commit"**
6. **Aguarde** o build (2-5 minutos)

---

## ✅ Verificação

Após alterar, o Build Command deve ficar assim:

```
npm install && API_URL=${API_URL} npm run build
```

**Sem o `$` no início** (o Render adiciona automaticamente)
**Usando `build` ao invés de `build:frontend`**

---

## 🎯 Outros Campos (Estão Corretos)

- ✅ **Publish Directory**: `dist` (correto)
- ✅ **Branch**: `main` (correto)
- ✅ **Repository**: Correto
- ✅ **Auto-Deploy**: `On Commit` (correto)

---

## 🚀 Após Corrigir

1. Build deve funcionar
2. Aguardar 2-5 minutos
3. Verificar logs para confirmar sucesso
4. Anotar URL do frontend gerada
5. Configurar CORS no backend (próximo passo)

---

**Ação imediata**: Clique em "Edit" no Build Command e mude para `npm run build`!
