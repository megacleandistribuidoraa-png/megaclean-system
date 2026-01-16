# 🔧 Editar ou Recriar Static Site no Render

## 🎯 Situação

Não consegue editar o serviço `erp-system-frontend` no Render.

---

## ✅ Opção 1: Editar nas Settings (Tentar Primeiro)

### Passo a Passo:

1. **No Render Dashboard**, clique no serviço `erp-system-frontend`
2. Vá em **"Settings"** (no menu lateral ou no topo)
3. Procure por **"Build Command"**
4. Edite o comando para:
   ```
   npm install && API_URL=${API_URL} npm run build
   ```
   (usando `build` ao invés de `build:frontend`)
5. **Salve** (botão "Save Changes" ou similar)
6. Vá em **"Manual Deploy"** → **"Deploy latest commit"**

---

## 🗑️ Opção 2: Deletar e Recriar (Se Não Conseguir Editar)

### Vantagens:
- ✅ Começar do zero
- ✅ Configuração limpa
- ✅ Sem histórico de erros

### Desvantagens:
- ❌ Perde histórico de deploys (mas não importa se está começando)

### Passo a Passo:

#### 1. Deletar o Serviço Atual

1. No Render Dashboard, clique em `erp-system-frontend`
2. Vá em **"Settings"** (no final da página)
3. Role até o final
4. Procure por **"Delete Service"** ou **"Danger Zone"**
5. Clique em **"Delete"** ou **"Delete Service"**
6. Confirme a exclusão

#### 2. Criar Novo Static Site

1. **New +** → **Static Site**
2. Conectar repositório: `megacleandistribuidoraa-png / Zentra-Tech` (ou o correto)
3. Branch: `main`

#### 3. Configurar Corretamente

**Name:**
```
erp-system-frontend
```
(ou qualquer nome que preferir)

**Build Command:**
```
npm install && API_URL=${API_URL} npm run build
```
⚠️ **Use `build` ao invés de `build:frontend`** (mais simples e funciona)

**Publish Directory:**
```
dist
```

**Environment Variables:**
```
Key: API_URL
Value: https://megaclean-system.onrender.com/api
```

#### 4. Deploy

1. Clique em **"Create Static Site"**
2. Aguarde build (2-5 minutos)

---

## 🔍 Por Que Não Consegue Editar?

### Possíveis Motivos:

1. **Serviço está em deploy**: Aguarde terminar
2. **Permissões**: Verifique se tem permissão de edição
3. **Interface**: Tente em Settings ao invés da tela principal
4. **Cache do navegador**: Tente atualizar (Ctrl+F5)

---

## ✅ Recomendação

### Se está começando (não tem clientes ainda):

**Deletar e recriar** é mais rápido e limpo!

### Se já tem histórico importante:

**Tentar editar nas Settings** primeiro.

---

## 📝 Checklist para Recriar

- [ ] Deletar serviço atual
- [ ] Criar novo Static Site
- [ ] Conectar repositório correto
- [ ] Configurar Build Command: `npm install && API_URL=${API_URL} npm run build`
- [ ] Configurar Publish Directory: `dist`
- [ ] Adicionar Environment Variable: `API_URL`
- [ ] Fazer deploy
- [ ] Verificar que build funciona

---

## 🎯 Build Command Recomendado

**Use este (mais simples):**
```
npm install && API_URL=${API_URL} npm run build
```

**Por quê?**
- O script `build` já existe no package.json
- Funciona igual ao `build:frontend`
- Menos chance de erro

---

**Ação**: Tente editar nas Settings primeiro. Se não conseguir, delete e recrie (é rápido e não tem problema se está começando)!
