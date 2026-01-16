# 🔧 Corrigir Erro de Build - Render

## ❌ Erro Identificado

```
npm error Missing script: "build: frontend"
```

## 🔍 Causa do Problema

O Render está procurando pelo script `build: frontend` (com espaço), mas o script correto é `build:frontend` (sem espaço).

**Possíveis causas:**
1. O repositório no Render (`Zentra-Tech`) pode não ter o script no `package.json`
2. O Build Command pode ter um espaço extra
3. O `package.json` no repositório remoto está desatualizado

---

## ✅ Soluções

### Solução 1: Verificar Build Command (Mais Provável)

No Render, verifique o **Build Command**:

**❌ ERRADO:**
```
npm install && API_URL=${API_URL} npm run build: frontend
```
(Note o espaço após `build:`)

**✅ CORRETO:**
```
npm install && API_URL=${API_URL} npm run build:frontend
```
(Sem espaço após `build:`)

### Solução 2: Verificar package.json no Repositório

O repositório mostrado é: `megacleandistribuidoraa-png / Zentra-Tech`

**Verifique se o `package.json` nesse repositório tem:**

```json
{
  "scripts": {
    "build:frontend": "node build-frontend.js"
  }
}
```

**Se não tiver, você precisa:**

1. **Adicionar o script no package.json:**
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js",
     "build:frontend": "node build-frontend.js",
     "build": "node build-frontend.js"
   }
   ```

2. **Fazer commit e push:**
   ```bash
   git add package.json
   git commit -m "fix: adicionar script build:frontend"
   git push
   ```

### Solução 3: Usar Script Alternativo

Se o problema persistir, use o script `build` que já existe:

**Build Command alternativo:**
```
npm install && API_URL=${API_URL} npm run build
```

---

## 🔧 Passo a Passo para Corrigir

### Opção A: Corrigir Build Command no Render

1. No Render, vá em **Settings** do Static Site
2. Encontre **Build Command**
3. Verifique se está exatamente assim (sem espaços extras):
   ```
   npm install && API_URL=${API_URL} npm run build:frontend
   ```
4. Se tiver espaço, remova
5. Salve
6. Faça novo deploy

### Opção B: Verificar e Atualizar package.json

1. Verifique o repositório: `megacleandistribuidoraa-png / Zentra-Tech`
2. Abra o `package.json` nesse repositório
3. Verifique se tem o script `build:frontend`
4. Se não tiver, adicione:
   ```json
   "build:frontend": "node build-frontend.js"
   ```
5. Faça commit e push
6. O Render fará deploy automático

### Opção C: Usar Script "build" (Mais Simples)

1. No Render, altere o **Build Command** para:
   ```
   npm install && API_URL=${API_URL} npm run build
   ```
2. Salve
3. Faça novo deploy

---

## ✅ Verificação Rápida

### No package.json deve ter:

```json
{
  "scripts": {
    "build:frontend": "node build-frontend.js",
    "build": "node build-frontend.js"
  }
}
```

### Build Command deve ser (escolha uma):

**Opção 1:**
```
npm install && API_URL=${API_URL} npm run build:frontend
```

**Opção 2 (alternativa):**
```
npm install && API_URL=${API_URL} npm run build
```

---

## 🚀 Após Corrigir

1. **Salvar** as alterações no Render
2. **Fazer novo deploy** (Manual Deploy ou aguardar automático)
3. **Aguardar build** (2-5 minutos)
4. **Verificar logs** - deve mostrar sucesso

---

## 🐛 Se Ainda Der Erro

### Verificar:

1. **Arquivo build-frontend.js existe?**
   - Deve estar na raiz do repositório
   - Mesmo nível do `package.json`

2. **Node.js está instalado?**
   - Render usa Node.js automaticamente
   - Verifique se não há problema de versão

3. **Dependências instaladas?**
   - O `npm install` deve executar antes
   - Verifique se não há erros no `npm install`

---

## 📝 Checklist

- [ ] Build Command verificado (sem espaços extras)
- [ ] package.json tem script `build:frontend` ou `build`
- [ ] Arquivo `build-frontend.js` existe no repositório
- [ ] Alterações commitadas e enviadas (se necessário)
- [ ] Novo deploy iniciado
- [ ] Logs verificados

---

**Status**: ⚠️ Erro identificado - siga as soluções acima
