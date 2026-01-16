# 🔧 Corrigir Erro de Autenticação MongoDB

Erro: `bad auth: authentication failed`

Vamos verificar e corrigir passo a passo.

---

## 🔍 Verificações Necessárias

### 1. Verificar se a Senha Foi Atualizada no Render

1. No Render, vá em **"Environment"**
2. Clique na variável `MONGODB_URI` para editar
3. **Verifique se a senha na string está atualizada** (com a nova senha que você criou)
4. Se ainda estiver com a senha antiga = Atualize e salve novamente

### 2. Verificar Formato da String

A string deve estar assim:
```
mongodb+srv://megacleandistribuidoraa_db_user:NOVA_SENHA_AQUI@cluster0.en8yzsz.mongodb.net/megaclean?appName=Cluster0
```

**IMPORTANTE:**
- Não pode ter espaços na senha (ou usar `%20` se tiver)
- Não pode ter `<` ou `>` na string
- A senha deve estar entre `:` e `@`

### 3. Verificar Senha no MongoDB Atlas

1. No MongoDB Atlas, vá em **"Database Access"**
2. Encontre o usuário `megacleandistribuidoraa_db_user`
3. Clique nos 3 pontinhos (...) → **"Edit"**
4. **Confirme qual é a senha atual** (clique em "HIDE" para ver)
5. **Anote exatamente** como está (maiúsculas, minúsculas, números, caracteres especiais)

### 4. Verificar Permissões do Usuário

1. No MongoDB Atlas, vá em **"Database Access"**
2. Clique no usuário `megacleandistribuidoraa_db_user`
3. Verifique se tem a permissão: **"Read and write to any database"** ou **"atlasAdmin"**
4. Se não tiver = Edite e adicione essa permissão

---

## 🔧 Soluções

### Solução 1: Recriar a String do Zero

1. **No MongoDB Atlas:**
   - Vá em "Connect" → "Connect your application"
   - Copie a string que aparece
   - Substitua `<password>` pela senha REAL (sem `<` e `>`)
   - Adicione `/megaclean` antes do `?`

2. **No Render:**
   - Vá em "Environment"
   - Edite `MONGODB_URI`
   - **Apague tudo** e cole a string nova
   - Salve com "Save, rebuild, and deploy"

### Solução 2: Criar Novo Usuário (Se Nada Funcionar)

1. **No MongoDB Atlas:**
   - Vá em "Database Access"
   - Clique em "Add New Database User"
   - Username: `megaclean_user` (nome simples)
   - Password: Crie uma senha **simples** (ex: `MegaClean2024`)
   - Permissão: **"Read and write to any database"**
   - Clique em "Add User"

2. **Pegar Nova String:**
   - Vá em "Connect" → "Connect your application"
   - Copie a string
   - Substitua `<username>` pelo novo usuário
   - Substitua `<password>` pela nova senha
   - Adicione `/megaclean` antes do `?`

3. **Atualizar no Render:**
   - Edite `MONGODB_URI` com a nova string
   - Salve com "Save, rebuild, and deploy"

### Solução 3: Codificar Caracteres Especiais

Se a senha tiver caracteres especiais, pode precisar codificar:

- Espaço = `%20` ou `+`
- `@` = `%40`
- `#` = `%23`
- `$` = `%24`
- `%` = `%25`
- `&` = `%26`
- `+` = `%2B`
- `=` = `%3D`

**Exemplo:**
Se a senha for `Senha@123`, use `Senha%40123`

---

## ✅ Checklist de Verificação

- [ ] Senha no Render está atualizada com a nova senha?
- [ ] Senha no MongoDB Atlas está correta?
- [ ] String não tem `<` ou `>` na senha?
- [ ] String tem `/megaclean` antes do `?`?
- [ ] Usuário tem permissão "Read and write to any database"?
- [ ] Fiz "Save, rebuild, and deploy" após atualizar?
- [ ] Aguardei o deploy terminar?
- [ ] Verifiquei os logs novamente?

---

## 🆘 Se Ainda Não Funcionar

Me diga:
1. Qual é a senha que você configurou? (pode mascarar, tipo: `Sen***123`)
2. A string no Render tem a senha correta?
3. O usuário tem as permissões corretas?
4. Qual erro aparece nos logs agora?

Com essas informações, consigo te ajudar melhor!
