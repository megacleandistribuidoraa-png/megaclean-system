# ✅ Checklist de Validação - Deploy Frontend Static

Use este checklist para validar se tudo está funcionando corretamente após o deploy.

## 🔧 Configuração Inicial

- [ ] Backend está rodando e acessível no Render
- [ ] URL do backend anotada (ex: `https://megaclean-backend.onrender.com`)
- [ ] CORS configurado no backend para aceitar requisições do frontend
- [ ] Variável de ambiente `API_URL` configurada no Render (Static Site)

## 🏗️ Build

- [ ] Build executado com sucesso (`npm run build:frontend`)
- [ ] Pasta `dist/` criada com todos os arquivos
- [ ] Arquivo `dist/js/config.js` contém a URL correta da API
- [ ] Não há erros no console durante o build

## 🧪 Teste Local

- [ ] Frontend testado localmente (`npx serve dist`)
- [ ] Login funciona corretamente
- [ ] Chamadas à API funcionam (verificar Network tab)
- [ ] Não há erros de CORS no console
- [ ] Páginas principais carregam (Dashboard, Clientes, Produtos, etc.)

## 🌐 Deploy no Render

- [ ] Static Site criado no Render
- [ ] Repositório Git conectado (se aplicável)
- [ ] Build Command configurado: `npm run build:frontend`
- [ ] Publish Directory configurado: `dist`
- [ ] Variável de ambiente `API_URL` configurada
- [ ] Deploy concluído com sucesso

## 🔍 Validação Pós-Deploy

### Funcionalidades Básicas

- [ ] **Acesso ao site**: Frontend carrega corretamente
- [ ] **Login**: Usuário consegue fazer login
- [ ] **Dashboard**: Dashboard carrega e exibe dados
- [ ] **Navegação**: Menu lateral funciona corretamente

### Chamadas de API

- [ ] **GET /api/login**: Login funciona
- [ ] **GET /api/admin/pages**: Menu carrega
- [ ] **GET /api/clientes**: Lista de clientes carrega
- [ ] **GET /api/produtos**: Lista de produtos carrega
- [ ] **GET /api/pedidos**: Lista de pedidos carrega
- [ ] **POST /api/clientes**: Criar cliente funciona
- [ ] **PUT /api/clientes/:id**: Editar cliente funciona
- [ ] **DELETE /api/clientes/:id**: Deletar cliente funciona

### Console e Network

- [ ] **Console**: Sem erros JavaScript
- [ ] **Network**: Todas as requisições retornam 200/201
- [ ] **CORS**: Sem erros de CORS
- [ ] **404**: Nenhuma requisição retornando 404

### Páginas Principais

- [ ] **Dashboard**: Estatísticas carregam
- [ ] **Clientes**: CRUD completo funciona
- [ ] **Produtos**: CRUD completo funciona
- [ ] **Pedidos**: Criar e listar pedidos funciona
- [ ] **Orçamentos**: Criar e listar orçamentos funciona
- [ ] **Estoque**: Ajustes de estoque funcionam
- [ ] **Fornecedores**: CRUD funciona
- [ ] **Categorias**: CRUD funciona
- [ ] **Usuários**: CRUD funciona (se admin)
- [ ] **Configurações**: Salvar configurações funciona

### Autenticação

- [ ] **Token**: Token é salvo no localStorage
- [ ] **Headers**: Token é enviado nas requisições
- [ ] **Expiração**: Sessão mantém autenticação
- [ ] **Logout**: Logout funciona corretamente

### Service Worker (PWA)

- [ ] **Registro**: Service Worker registra sem erros
- [ ] **Cache**: Arquivos são cacheados (se aplicável)
- [ ] **Offline**: Comportamento offline funciona (se aplicável)

## 🔒 Segurança

- [ ] **HTTPS**: Site acessível apenas via HTTPS
- [ ] **Tokens**: Tokens não são expostos em logs
- [ ] **CORS**: Apenas domínios permitidos podem acessar a API

## 📱 Responsividade

- [ ] **Mobile**: Site funciona em dispositivos móveis
- [ ] **Tablet**: Site funciona em tablets
- [ ] **Desktop**: Site funciona em desktop

## 🐛 Problemas Conhecidos

Se encontrar algum problema, anote aqui:

- [ ] Problema 1: _______________________
- [ ] Problema 2: _______________________
- [ ] Problema 3: _______________________

## 📝 Notas Finais

- [ ] Documentação atualizada
- [ ] Equipe notificada sobre o deploy
- [ ] Backup do código anterior (se aplicável)

---

## 🆘 Em Caso de Problemas

1. **Verificar logs do Render**: Dashboard → Static Site → Logs
2. **Verificar Network tab**: DevTools → Network → Ver requisições falhando
3. **Verificar Console**: DevTools → Console → Ver erros JavaScript
4. **Verificar CORS**: Se houver erro de CORS, verificar configuração no backend
5. **Reverter deploy**: Se necessário, fazer rollback para versão anterior

---

**Data do Deploy**: _______________
**Responsável**: _______________
**Status Final**: ⬜ Sucesso | ⬜ Parcial | ⬜ Falhou
