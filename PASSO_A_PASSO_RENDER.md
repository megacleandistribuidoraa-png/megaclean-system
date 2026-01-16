# 🚀 Passo a Passo Completo - Deploy Frontend no Render

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] Conta no Render (crie em [render.com](https://render.com))
- [ ] Backend já rodando no Render (Web Service)
- [ ] URL do backend anotada (ex: `https://megaclean-backend.onrender.com`)
- [ ] Código do frontend no Git (GitHub, GitLab ou Bitbucket)

---

## 📝 PASSO 1: Preparar o Código

### 1.1 Verificar se o código está no Git

```bash
# Verificar status do Git
git status

# Se não estiver commitado, faça:
git add .
git commit -m "Preparar frontend para deploy estático"
git push
```

### 1.2 Anotar a URL do Backend

Anote a URL completa do seu backend no Render. Exemplo:
```
https://megaclean-backend.onrender.com
```

**IMPORTANTE**: Você precisará adicionar `/api` no final, ficando:
```
https://megaclean-backend.onrender.com/api
```

---

## 🌐 PASSO 2: Acessar o Render Dashboard

1. Acesse [https://dashboard.render.com](https://dashboard.render.com)
2. Faça login na sua conta
3. Você verá o dashboard principal

---

## ➕ PASSO 3: Criar Novo Static Site

### 3.1 Clicar em "New +"

No canto superior direito do dashboard, clique no botão **"New +"** (verde)

### 3.2 Selecionar "Static Site"

No menu que aparece, clique em **"Static Site"**

---

## 🔗 PASSO 4: Conectar Repositório Git

### 4.1 Escolher Provedor

Render mostrará opções para conectar seu repositório:
- **GitHub** (mais comum)
- **GitLab**
- **Bitbucket**

Clique no provedor onde seu código está.

### 4.2 Autorizar Render

- Se for a primeira vez, você precisará autorizar o Render a acessar seus repositórios
- Clique em **"Authorize"** ou **"Connect"**
- Siga as instruções na tela

### 4.3 Selecionar Repositório

- Render mostrará uma lista dos seus repositórios
- Encontre e selecione o repositório `megaclean-system` (ou o nome do seu projeto)
- Clique nele

### 4.4 Selecionar Branch

- Escolha a branch principal (geralmente `main` ou `master`)
- Clique em **"Continue"** ou **"Next"**

---

## ⚙️ PASSO 5: Configurar o Static Site

Agora você verá um formulário de configuração. Preencha os campos:

### 5.1 Nome do Serviço

**Campo: Name**
```
megaclean-frontend
```
(ou qualquer nome que você preferir)

### 5.2 Branch

**Campo: Branch**
```
main
```
(ou a branch que você usa)

### 5.3 Build Command

**Campo: Build Command**

Cole este comando:
```bash
npm install && API_URL=${API_URL} npm run build:frontend
```

**Explicação**: 
- `npm install` instala as dependências
- `API_URL=${API_URL}` usa a variável de ambiente que você vai configurar
- `npm run build:frontend` executa o script de build

### 5.4 Publish Directory

**Campo: Publish Directory**

Digite:
```
dist
```

**Explicação**: Esta é a pasta onde o build gera os arquivos estáticos.

### 5.5 Environment Variables (Variáveis de Ambiente)

Clique em **"Add Environment Variable"** e adicione:

**Key (Chave):**
```
API_URL
```

**Value (Valor):**
```
https://seu-backend.onrender.com/api
```

**⚠️ IMPORTANTE**: 
- Substitua `seu-backend.onrender.com` pela URL real do seu backend
- **NÃO esqueça** de adicionar `/api` no final
- Exemplo: Se seu backend é `https://megaclean-backend.onrender.com`, use `https://megaclean-backend.onrender.com/api`

### 5.6 Plano (Plan)

Escolha:
- **Free** (gratuito) - suficiente para começar
- Ou um plano pago se preferir

---

## 🚀 PASSO 6: Criar o Static Site

### 6.1 Revisar Configurações

Antes de criar, revise se está tudo correto:

- ✅ Name: `megaclean-frontend`
- ✅ Branch: `main` (ou sua branch)
- ✅ Build Command: `npm install && API_URL=${API_URL} npm run build:frontend`
- ✅ Publish Directory: `dist`
- ✅ Environment Variable: `API_URL = https://seu-backend.onrender.com/api`

### 6.2 Criar

Clique no botão **"Create Static Site"** (ou **"Create"**)

---

## ⏳ PASSO 7: Aguardar o Deploy

### 7.1 Build em Progresso

Você verá uma tela mostrando:
- Status: "Building" ou "In progress"
- Logs do build em tempo real

**Tempo estimado**: 2-5 minutos

### 7.2 O que está acontecendo:

1. Render clona seu repositório
2. Executa `npm install`
3. Executa o build com a URL da API
4. Publica os arquivos da pasta `dist`

### 7.3 Logs

Você pode acompanhar os logs em tempo real. Procure por:
- ✅ "Build succeeded"
- ✅ "Published successfully"

---

## ✅ PASSO 8: Verificar o Deploy

### 8.1 Status "Live"

Quando o deploy terminar, o status mudará para **"Live"** (verde)

### 8.2 URL do Frontend

Render fornecerá uma URL para seu frontend, algo como:
```
https://megaclean-frontend.onrender.com
```

**Anote esta URL!** Você precisará dela para configurar o CORS no backend.

---

## 🔒 PASSO 9: Configurar CORS no Backend

Agora você precisa permitir que o frontend faça requisições ao backend.

### 9.1 Acessar o Backend no Render

1. No dashboard do Render, encontre seu serviço de backend (Web Service)
2. Clique nele para abrir as configurações

### 9.2 Editar o Código do Backend

Você precisa editar o arquivo `server.js` do backend para adicionar o CORS.

**Opção A: Se você tem acesso ao código localmente:**

1. Abra o arquivo `server.js`
2. Encontre a linha com `app.use(cors());`
3. Substitua por:

```javascript
const allowedOrigins = [
  'https://megaclean-frontend.onrender.com', // URL do seu frontend
  'http://localhost:3000' // Para desenvolvimento local
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requisições sem origin (mobile apps, Postman, etc)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

4. Faça commit e push:
```bash
git add server.js
git commit -m "Configurar CORS para frontend"
git push
```

5. O Render fará deploy automático do backend

**Opção B: Se você não tem acesso local:**

1. No Render, vá em **"Settings"** do backend
2. Procure por **"Environment Variables"**
3. Adicione uma variável (se necessário)
4. Ou edite diretamente no código via interface do Render (se disponível)

---

## 🧪 PASSO 10: Testar o Frontend

### 10.1 Acessar o Frontend

1. Abra a URL do frontend no navegador:
   ```
   https://megaclean-frontend.onrender.com
   ```

2. Você deve ver a tela de login

### 10.2 Testar Login

1. Tente fazer login com as credenciais do admin
2. Verifique se carrega corretamente

### 10.3 Verificar Console

1. Abra o DevTools (F12)
2. Vá na aba **Console**
3. Verifique se não há erros

### 10.4 Verificar Network

1. No DevTools, vá na aba **Network**
2. Tente fazer login
3. Verifique se as requisições para `/api/login` estão funcionando
4. Verifique se retornam status 200 (sucesso)

---

## 🐛 Troubleshooting (Solução de Problemas)

### Problema: Build falha

**Sintomas**: Status fica em "Build failed"

**Soluções**:
1. Verifique os logs do build no Render
2. Verifique se o `package.json` tem o script `build:frontend`
3. Verifique se a variável `API_URL` está configurada
4. Verifique se o Node.js está configurado corretamente

### Problema: Erro de CORS

**Sintomas**: No console aparece "CORS policy" ou "Access-Control-Allow-Origin"

**Soluções**:
1. Verifique se a URL do frontend está na lista de `allowedOrigins` no backend
2. Verifique se o backend está rodando
3. Verifique se a URL da API está correta

### Problema: 404 nas chamadas de API

**Sintomas**: Requisições retornam 404

**Soluções**:
1. Verifique se a variável `API_URL` está configurada corretamente
2. Verifique se o backend está rodando
3. Verifique se a URL no `config.js` foi substituída corretamente (veja os logs do build)

### Problema: Frontend não carrega

**Sintomas**: Tela branca ou erro ao carregar

**Soluções**:
1. Verifique os logs do build
2. Verifique se a pasta `dist` foi criada corretamente
3. Verifique se os arquivos HTML estão na raiz da pasta `dist`

---

## 📝 Checklist Final

Use este checklist para garantir que tudo está configurado:

- [ ] Repositório conectado ao Render
- [ ] Static Site criado
- [ ] Build Command configurado: `npm install && API_URL=${API_URL} npm run build:frontend`
- [ ] Publish Directory configurado: `dist`
- [ ] Variável `API_URL` configurada com a URL completa do backend + `/api`
- [ ] Deploy concluído com sucesso (status "Live")
- [ ] CORS configurado no backend
- [ ] Frontend acessível via URL
- [ ] Login funciona
- [ ] Chamadas de API funcionam (verificar Network tab)
- [ ] Sem erros no console

---

## 🎉 Pronto!

Se tudo estiver funcionando, seu frontend está hospedado como Static Site no Render!

### URLs importantes:

- **Frontend**: `https://megaclean-frontend.onrender.com`
- **Backend API**: `https://megaclean-backend.onrender.com/api`

### Próximos passos:

1. Compartilhe a URL do frontend com sua equipe
2. Configure um domínio customizado (opcional)
3. Configure SSL/HTTPS (já vem por padrão no Render)
4. Monitore os logs e performance

---

## 📞 Precisa de Ajuda?

Se encontrar problemas:

1. Verifique os logs no Render Dashboard
2. Verifique o console do navegador (F12)
3. Verifique a aba Network no DevTools
4. Consulte a documentação do Render: [render.com/docs](https://render.com/docs)

---

**Última atualização**: $(Get-Date -Format "dd/MM/yyyy")
