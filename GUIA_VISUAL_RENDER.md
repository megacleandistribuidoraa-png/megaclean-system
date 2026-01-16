# 🎨 Guia Visual - Deploy no Render

## 📸 Passo a Passo com Screenshots (Descrição)

### Tela 1: Dashboard do Render
```
┌─────────────────────────────────────────┐
│  Render Dashboard                      │
│  ┌───────────────────────────────────┐  │
│  │  [New +]  ← Clique aqui!         │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Seus serviços aparecerão aqui         │
└─────────────────────────────────────────┘
```

### Tela 2: Menu "New +"
```
┌─────────────────────────────────────────┐
│  New                                    │
│  ┌───────────────────────────────────┐  │
│  │  Web Service                      │  │
│  │  Static Site  ← Selecione este!   │  │
│  │  Background Worker                 │  │
│  │  PostgreSQL Database               │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Tela 3: Conectar Repositório
```
┌─────────────────────────────────────────┐
│  Connect a repository                  │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │  GitHub  │  │  GitLab  │           │
│  └──────────┘  └──────────┘           │
│                                         │
│  [Connect GitHub]  ← Clique aqui      │
└─────────────────────────────────────────┘
```

### Tela 4: Selecionar Repositório
```
┌─────────────────────────────────────────┐
│  Select repository                      │
│                                         │
│  🔍 Search repositories...            │
│                                         │
│  ✓ megaclean-system  ← Selecione      │
│    username/megaclean-system           │
│                                         │
│  Branch: [main ▼]                      │
│                                         │
│  [Continue]                             │
└─────────────────────────────────────────┘
```

### Tela 5: Configurar Static Site
```
┌─────────────────────────────────────────┐
│  Create Static Site                    │
│                                         │
│  Name:                                  │
│  [megaclean-frontend____________]      │
│                                         │
│  Branch:                               │
│  [main ▼]                              │
│                                         │
│  Build Command:                         │
│  [npm install && API_URL=${API_URL}    │
│   npm run build:frontend________]       │
│                                         │
│  Publish Directory:                    │
│  [dist________________]                │
│                                         │
│  Environment Variables:                 │
│  ┌─────────────────────────────────┐  │
│  │ Key: [API_URL]                  │  │
│  │ Value: [https://seu-backend...] │  │
│  │ [+ Add]                          │  │
│  └─────────────────────────────────┘  │
│                                         │
│  Plan: [Free ▼]                        │
│                                         │
│  [Create Static Site]  ← Clique aqui!  │
└─────────────────────────────────────────┘
```

### Tela 6: Build em Progresso
```
┌─────────────────────────────────────────┐
│  megaclean-frontend                    │
│  Status: 🟡 Building...               │
│                                         │
│  ┌─────────────────────────────────┐  │
│  │  Logs:                           │  │
│  │  > npm install                   │  │
│  │  > Building frontend...          │  │
│  │  > ✅ Build succeeded            │  │
│  │  > 📦 Publishing...              │  │
│  └─────────────────────────────────┘  │
│                                         │
│  Aguarde 2-5 minutos...               │
└─────────────────────────────────────────┘
```

### Tela 7: Deploy Concluído
```
┌─────────────────────────────────────────┐
│  megaclean-frontend                    │
│  Status: 🟢 Live                       │
│                                         │
│  URL:                                  │
│  https://megaclean-frontend.onrender.com│
│                                         │
│  [Open]  ← Clique para abrir!          │
└─────────────────────────────────────────┘
```

---

## 📝 Valores para Copiar e Colar

### Build Command:
```bash
npm install && API_URL=${API_URL} npm run build:frontend
```

### Publish Directory:
```
dist
```

### Environment Variable:
```
Key: API_URL
Value: https://seu-backend.onrender.com/api
```
⚠️ **Lembre-se**: Substitua `seu-backend.onrender.com` pela URL real!

---

## ✅ Checklist Visual

```
□ 1. Acessei dashboard.render.com
□ 2. Cliquei em "New +"
□ 3. Selecionei "Static Site"
□ 4. Conectei meu repositório Git
□ 5. Configurei Name: megaclean-frontend
□ 6. Configurei Build Command
□ 7. Configurei Publish Directory: dist
□ 8. Adicionei variável API_URL
□ 9. Cliquei em "Create Static Site"
□ 10. Aguardei build concluir
□ 11. Anotei a URL do frontend
□ 12. Configurei CORS no backend
□ 13. Testei o frontend
```

---

## 🎯 Onde Encontrar Cada Coisa

### URL do Backend:
1. Render Dashboard
2. Abra seu Web Service (backend)
3. Copie a URL no topo (ex: `https://megaclean-backend.onrender.com`)
4. Adicione `/api` no final

### URL do Frontend:
1. Render Dashboard
2. Abra seu Static Site (frontend)
3. Copie a URL no topo (ex: `https://megaclean-frontend.onrender.com`)

### Logs do Build:
1. Render Dashboard
2. Abra seu Static Site
3. Aba "Logs"
4. Veja o progresso em tempo real

---

## 🚨 Erros Comuns e Soluções

### ❌ "Build failed"
**Onde ver**: Aba "Logs" do Static Site
**Solução**: 
- Verifique se `package.json` tem o script `build:frontend`
- Verifique se a variável `API_URL` está configurada

### ❌ "CORS error"
**Onde ver**: Console do navegador (F12)
**Solução**: 
- Configure CORS no backend (veja `CONFIGURAR_CORS_BACKEND.md`)
- Adicione a URL do frontend na lista de origens permitidas

### ❌ "404 Not Found" nas APIs
**Onde ver**: Network tab do DevTools (F12)
**Solução**: 
- Verifique se `API_URL` está correta
- Verifique se o backend está rodando
- Verifique se adicionou `/api` no final da URL

---

## 📞 Precisa de Ajuda?

1. **Logs do Render**: Dashboard → Static Site → Logs
2. **Console do Navegador**: F12 → Console
3. **Network Tab**: F12 → Network → Ver requisições
4. **Documentação**: `PASSO_A_PASSO_RENDER.md` (guia completo)

---

**Dica**: Mantenha este guia aberto enquanto faz o deploy! 📖
