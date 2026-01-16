# 🔧 Solução - Script Ausente no Repositório

## ❌ Problema

O repositório `Zentra-Tech` não tem os scripts `build` ou `build:frontend` no `package.json`.

**Erro:**
```
npm error Missing script: "build"
```

---

## ✅ Solução: Adicionar Script no Repositório

### Opção 1: Adicionar Script no package.json (Recomendado)

#### 1. No seu repositório local ou no GitHub:

Abra o arquivo `package.json` do repositório `Zentra-Tech`

#### 2. Adicione os scripts:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build:frontend": "node build-frontend.js",
    "build": "node build-frontend.js"
  }
}
```

#### 3. Certifique-se de que o arquivo `build-frontend.js` existe na raiz do repositório

#### 4. Faça commit e push:

```bash
git add package.json
git commit -m "fix: adicionar scripts de build"
git push
```

#### 5. O Render fará deploy automático

---

## ✅ Opção 2: Build Command Direto (Alternativa Rápida)

Se não quiser alterar o repositório agora, use o comando direto:

### No Render, altere o Build Command para:

```
npm install && API_URL=${API_URL} node build-frontend.js
```

**Por quê?**
- Executa o script diretamente, sem precisar do npm run
- Não depende dos scripts do package.json

---

## 🔍 Verificar o Que Existe no Repositório

### No GitHub, verifique:

1. **Arquivo `package.json` existe?**
   - Deve estar na raiz do repositório
   - Deve ter a seção `scripts`

2. **Arquivo `build-frontend.js` existe?**
   - Deve estar na raiz do repositório
   - Mesmo nível do `package.json`

3. **Pasta `public/` existe?**
   - Deve conter os arquivos do frontend

---

## 📝 Passo a Passo Completo

### Se o arquivo `build-frontend.js` existe no repositório:

**Use Build Command direto:**
```
npm install && API_URL=${API_URL} node build-frontend.js
```

### Se o arquivo NÃO existe:

**Você precisa:**
1. Adicionar `build-frontend.js` ao repositório
2. Adicionar scripts no `package.json`
3. Fazer commit e push
4. Aguardar deploy automático

---

## 🎯 Solução Mais Rápida AGORA

### No Render, altere Build Command para:

```
npm install && API_URL=${API_URL} node build-frontend.js
```

**Isso deve funcionar se o arquivo `build-frontend.js` existir no repositório!**

---

## ✅ Checklist

- [ ] Verificar se `build-frontend.js` existe no repositório `Zentra-Tech`
- [ ] Se existir: Usar Build Command direto (`node build-frontend.js`)
- [ ] Se não existir: Adicionar arquivo ao repositório
- [ ] Adicionar scripts no `package.json`
- [ ] Fazer commit e push
- [ ] Aguardar deploy

---

**Ação imediata**: Tente o Build Command direto primeiro: `npm install && API_URL=${API_URL} node build-frontend.js`
