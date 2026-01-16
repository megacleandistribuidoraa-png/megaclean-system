# 🔍 Como Encontrar o Backend no Render

## 📍 Passo a Passo

### 1. Acesse o Dashboard do Render

1. Vá para [dashboard.render.com](https://dashboard.render.com)
2. Faça login se necessário

### 2. Veja a Lista de Serviços

No dashboard principal, você verá uma lista de todos os seus serviços:

```
┌─────────────────────────────────────────┐
│  Render Dashboard                       │
│                                         │
│  Seus Serviços:                        │
│  ┌───────────────────────────────────┐  │
│  │  🟢 megaclean-backend            │  │ ← Este é o backend!
│  │     Web Service                  │  │
│  │     https://megaclean-backend... │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  🟡 erp-system-frontend           │  │ ← Este é o frontend
│  │     Static Site                   │  │
│  │     Building...                   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### 3. Identifique o Backend

O backend geralmente tem:
- **Tipo**: "Web Service" (não "Static Site")
- **Nome**: Pode ser algo como:
  - `megaclean-backend`
  - `megaclean-system`
  - `backend`
  - Ou o nome que você deu ao criar

### 4. Clique no Backend

Clique no card/serviço que é "Web Service" (não Static Site)

### 5. Veja a URL

Quando abrir, você verá no topo:

```
┌─────────────────────────────────────────┐
│  megaclean-backend                      │
│  Status: 🟢 Live                        │
│                                         │
│  URL:                                   │
│  https://megaclean-backend.onrender.com │ ← Esta é a URL!
│                                         │
│  [Open]                                 │
└─────────────────────────────────────────┘
```

**Copie essa URL!**

---

## 🎯 O Que Fazer com a URL

### 1. Copiar a URL do Backend

Exemplo: `https://megaclean-backend.onrender.com`

### 2. Adicionar `/api` no Final

Fica: `https://megaclean-backend.onrender.com/api`

### 3. Colar no Campo API_URL

Volte para a tela de configuração do Static Site e cole no campo "Value" da variável `API_URL`:

```
Key: API_URL
Value: https://megaclean-backend.onrender.com/api
```

---

## 🔍 Se Não Encontrar o Backend

### Opção 1: Backend Ainda Não Foi Criado

Se você ainda não criou o backend no Render:

1. Você precisa criar o backend primeiro
2. Vá em **"New +"** → **"Web Service"**
3. Conecte o mesmo repositório
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: `MONGODB_URI`, `ADMIN_TOKEN`, etc.
5. Aguarde o deploy
6. Copie a URL gerada

### Opção 2: Backend Está em Outro Workspace

1. Verifique se está no workspace correto
2. No topo, veja "M My Workspace" (ou nome do workspace)
3. Clique e verifique outros workspaces

### Opção 3: Backend Está com Outro Nome

Procure por serviços do tipo "Web Service" na lista. O backend sempre será "Web Service", não "Static Site".

---

## 📸 Onde Procurar

### No Dashboard Principal:

```
┌─────────────────────────────────────────┐
│  [M My Workspace ▼]  [+ New]           │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Seus Serviços                    │ │
│  │                                   │ │
│  │  🟢 Nome-do-Backend               │ │ ← Procure por este
│  │     Web Service                   │ │
│  │                                   │ │
│  │  🟡 Nome-do-Frontend              │ │
│  │     Static Site                   │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## ✅ Checklist

- [ ] Acessei dashboard.render.com
- [ ] Vi a lista de serviços
- [ ] Identifiquei o serviço tipo "Web Service"
- [ ] Cliquei nele
- [ ] Copiei a URL (ex: `https://nome-backend.onrender.com`)
- [ ] Adicionei `/api` no final
- [ ] Colei no campo API_URL do Static Site

---

## 💡 Dica

Se você tem vários serviços, procure pelo que tem:
- ✅ Status "Live" (verde)
- ✅ Tipo "Web Service"
- ✅ URL que termina com `.onrender.com`

---

**Encontrou? Copie a URL e adicione `/api` no final!** 🚀
