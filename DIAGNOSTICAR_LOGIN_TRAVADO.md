# 🔍 Diagnosticar Login Travado

## ❌ Problema

O login fica em "Entrando..." mas não completa.

---

## 🔍 Diagnóstico Passo a Passo

### 1. Verificar Network Tab (DevTools)

**No navegador:**

1. Abra **DevTools** (F12)
2. Vá na aba **Network**
3. Tente fazer login novamente
4. Procure por uma requisição para `/api/login` ou `login`

**O que verificar:**

- ✅ **Status da requisição**: Deve ser 200 (sucesso) ou 401 (credenciais inválidas)
- ❌ **Status 404**: URL da API está errada
- ❌ **Status 0 ou (failed)**: CORS bloqueando ou backend offline
- ❌ **Status 500**: Erro no backend

**Se não aparecer nenhuma requisição:**
- O JavaScript pode estar com erro
- Verificar Console para erros

---

### 2. Verificar Console (DevTools)

**No Console, procure por:**

- ❌ Erros de CORS: `Access-Control-Allow-Origin`
- ❌ Erros de rede: `Failed to fetch`
- ❌ Erros de JavaScript: `Uncaught...`

---

### 3. Verificar URL da API

**No código do frontend:**

1. Abra DevTools → Console
2. Digite: `window.API_BASE_URL`
3. Deve retornar: `https://megaclean-system.onrender.com/api`

**Se retornar `/api` ou `undefined`:**
- A variável de ambiente não foi configurada corretamente
- O build não substituiu a URL

---

### 4. Verificar Backend

**No Render Dashboard:**

1. Acesse o Web Service `megaclean-system`
2. Verifique se está **"Live"** (verde)
3. Veja os logs recentes
4. Tente acessar diretamente: `https://megaclean-system.onrender.com/api/admin/pages`

**Se retornar JSON**: Backend está funcionando
**Se retornar erro**: Backend pode estar com problema

---

## 🔧 Soluções Comuns

### Problema 1: CORS Bloqueando

**Sintoma**: Erro no console sobre CORS

**Solução:**
1. Verificar se o CORS foi configurado no `server.js`
2. Verificar se a URL do frontend está na lista de `allowedOrigins`
3. Fazer commit e push do `server.js`
4. Aguardar deploy do backend

### Problema 2: URL da API Errada

**Sintoma**: Requisição retorna 404

**Solução:**
1. Verificar variável `API_URL` no Render (Static Site)
2. Deve ser: `https://megaclean-system.onrender.com/api`
3. Fazer novo build/deploy do frontend

### Problema 3: Backend Offline

**Sintoma**: Requisição falha completamente

**Solução:**
1. Verificar se backend está "Live" no Render
2. Verificar logs do backend
3. Reiniciar o serviço se necessário

### Problema 4: Credenciais Incorretas

**Sintoma**: Requisição retorna 401

**Solução:**
1. Verificar credenciais do admin
2. Verificar variáveis de ambiente do backend:
   - `ADMIN_USER`
   - `ADMIN_PASS`

---

## 🚀 Ação Imediata

### 1. Verificar Network Tab

1. Abra DevTools (F12)
2. Aba **Network**
3. Tente fazer login
4. **Me diga:**
   - Aparece alguma requisição?
   - Qual o status? (200, 404, 500, failed, etc.)
   - Qual a URL da requisição?

### 2. Verificar Console

1. Aba **Console**
2. **Me diga:**
   - Há algum erro?
   - Qual a mensagem?

### 3. Verificar Backend

1. Render Dashboard → Web Service `megaclean-system`
2. **Me diga:**
   - Status está "Live"?
   - Há erros nos logs?

---

## 📝 Informações que Preciso

Para diagnosticar melhor, me informe:

1. **Network Tab**: 
   - Aparece requisição para `/api/login`?
   - Qual o status?

2. **Console**:
   - Há erros?
   - Quais?

3. **Backend**:
   - Está "Live" no Render?
   - Há erros nos logs?

---

**Ação**: Abra o Network tab, tente fazer login e me diga o que aparece! 🔍
