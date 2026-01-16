# 🔗 Como Pegar a String de Conexão do MongoDB Atlas

Guia passo a passo para obter a string de conexão do MongoDB.

---

## 📋 Passo a Passo Completo

### 1️⃣ Acessar o MongoDB Atlas

1. Abra o navegador
2. Acesse: **https://cloud.mongodb.com**
3. Faça login na sua conta MongoDB Atlas

**Se não tiver conta:**
- Clique em "Sign Up" (criar conta)
- É gratuito!

---

### 2️⃣ Selecionar seu Projeto/Cluster

1. Após fazer login, você verá uma lista de **projetos**
2. Clique no projeto que contém seu cluster (geralmente há um projeto padrão)
3. Você verá uma lista de **clusters** (ex: `Cluster0`)

---

### 3️⃣ Conectar ao Cluster

1. Clique no botão **"Connect"** (ao lado do nome do cluster)
2. Uma janela/modal vai abrir com opções de conexão

---

### 4️⃣ Escolher "Connect your application"

Na janela que abriu, você verá várias opções:

- ✅ **"Connect your application"** ← **ESCOLHA ESTA!**
- "Connect using MongoDB Compass"
- "Connect using VS Code"
- etc.

Clique em **"Connect your application"**

---

### 5️⃣ Copiar a String de Conexão

1. Você verá uma string tipo:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

2. **Copie essa string** (clique no ícone de copiar ao lado)

---

### 6️⃣ Preparar a String (IMPORTANTE!)

A string que você copiou tem `<username>` e `<password>` que precisam ser substituídos.

#### A) Substituir `<username>`:

1. No MongoDB Atlas, vá em **"Database Access"** (menu lateral esquerdo)
2. Você verá uma lista de usuários
3. **Anote o nome de um usuário** (ou crie um novo se não tiver)

#### B) Substituir `<password>`:

- Se você **lembra a senha** do usuário = use ela
- Se **não lembra** = crie um novo usuário:
  1. Em "Database Access", clique em **"Add New Database User"**
  2. Escolha "Password" como método de autenticação
  3. Digite um **username** (ex: `megaclean_user`)
  4. Digite uma **senha forte** (anote ela!)
  5. Em "Database User Privileges", escolha **"Read and write to any database"**
  6. Clique em **"Add User"**

#### C) Adicionar o nome do banco:

Na string, você precisa adicionar o nome do banco antes do `?`:

**Antes:**
```
mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

**Depois (adicionar `/megaclean` antes do `?`):**
```
mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/megaclean?retryWrites=true&w=majority
```

---

### 7️⃣ Exemplo Final

Sua string final deve ficar assim:

```
mongodb+srv://megaclean_user:MinhaSenha123@cluster0.xxxxx.mongodb.net/megaclean?retryWrites=true&w=majority
```

Onde:
- `megaclean_user` = seu username
- `MinhaSenha123` = sua senha
- `cluster0.xxxxx.mongodb.net` = seu cluster (vem do Atlas)
- `/megaclean` = nome do banco de dados

---

## 🔓 Passo Extra: Liberar IP (Importante!)

O MongoDB Atlas pode bloquear conexões de IPs desconhecidos.

1. No MongoDB Atlas, vá em **"Network Access"** (menu lateral)
2. Clique em **"Add IP Address"**
3. Clique em **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Isso libera acesso de qualquer IP
   - Para produção, é melhor adicionar apenas o IP do Render (mais seguro)
4. Clique em **"Confirm"**

**⚠️ IMPORTANTE:** Sem isso, o Render não conseguirá conectar!

---

## ✅ Checklist

- [ ] Acessei o MongoDB Atlas
- [ ] Encontrei meu cluster
- [ ] Cliquei em "Connect" → "Connect your application"
- [ ] Copiei a string de conexão
- [ ] Substituí `<username>` pelo meu usuário
- [ ] Substituí `<password>` pela senha do usuário
- [ ] Adicionei `/megaclean` antes do `?` na string
- [ ] Liberei o IP em "Network Access"
- [ ] Tenho a string final pronta para colar no Render

---

## 🆘 Problemas Comuns

### Não consigo fazer login no MongoDB Atlas
- Verifique se está usando a conta correta
- Tente recuperar a senha

### Não vejo nenhum cluster
- Você precisa criar um cluster primeiro
- Clique em "Create" ou "Build a Database"
- Escolha o plano gratuito (M0)

### Não tenho usuário criado
- Vá em "Database Access"
- Clique em "Add New Database User"
- Crie um usuário com senha

### A string não funciona
- Verifique se substituiu `<username>` e `<password>`
- Verifique se adicionou `/megaclean` antes do `?`
- Verifique se o IP está liberado em "Network Access"

---

**Agora você tem a string! Cole ela no Render na variável `MONGODB_URI`!** 🚀
