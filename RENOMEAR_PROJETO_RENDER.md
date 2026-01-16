# 🔄 Como Renomear o Projeto no Render

## 🎯 Objetivo

Renomear o projeto no Render para um nome genérico de empresa de desenvolvimento, adequado para comercialização.

---

## 📝 Passo a Passo

### 1. Na Tela Atual do Render

Você está na tela "New Static Site". Veja o campo **"Name"**:

```
Name:
[megaclean-system-1____________]
```

### 2. Escolher um Nome Genérico

Sugestões de nomes para empresa de desenvolvimento:

#### Opção 1: Nomes Técnicos
- `erp-system-frontend`
- `gestao-system-frontend`
- `distribuidora-system-frontend`
- `erp-solution-frontend`

#### Opção 2: Nomes de Empresa Genéricos
- `devtech-solutions-frontend`
- `softwaresolutions-frontend`
- `techdev-system-frontend`
- `sistemasdev-frontend`

#### Opção 3: Nomes Comerciais
- `erp-cloud-frontend`
- `gestao-cloud-frontend`
- `sistema-erp-frontend`

**Recomendação**: Use algo como `erp-system-frontend` ou `gestao-system-frontend`

### 3. Digitar o Novo Nome

No campo **"Name"**, apague `megaclean-system-1` e digite o novo nome.

**Exemplo:**
```
Name:
[erp-system-frontend____________]
```

### 4. Continuar a Configuração

Depois de renomear, continue preenchendo os outros campos:
- Build Command: `npm install && API_URL=${API_URL} npm run build:frontend`
- Publish Directory: `dist`
- Environment Variables: `API_URL`

---

## ⚠️ Importante

### O Nome no Render é Apenas para Identificação

- O nome no Render é **apenas interno** (para você identificar o serviço)
- **NÃO afeta** a URL do site (a URL será gerada automaticamente)
- **NÃO afeta** o código do sistema
- É apenas para organização no dashboard

### URL do Site

A URL será gerada automaticamente pelo Render, algo como:
- `https://erp-system-frontend.onrender.com`
- Ou `https://erp-system-frontend-xyz123.onrender.com`

Você pode configurar um domínio customizado depois se quiser.

---

## 🔄 Se o Projeto Já Foi Criado

Se você já criou o projeto e quer renomear depois:

1. Acesse o dashboard do Render
2. Clique no seu Static Site
3. Vá em **"Settings"** (Configurações)
4. Procure por **"Name"**
5. Edite e salve

---

## 📋 Checklist

- [ ] Escolhi um nome genérico
- [ ] Digitei o novo nome no campo "Name"
- [ ] Continuei a configuração normalmente
- [ ] Entendi que o nome é apenas para identificação interna

---

## 💡 Dicas

- Use nomes descritivos mas genéricos
- Evite nomes de empresas específicas
- Use hífens ao invés de espaços
- Mantenha o nome curto e claro

---

**Exemplo de nome recomendado**: `erp-system-frontend` ou `gestao-system-frontend`
