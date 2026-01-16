# ✅ Checklist Rápido - Migração Zentra Tech

## 🚀 FASE 1: Preparação (1-2 dias)

### GitHub
- [ ] Criar organização/conta: `zentra-tech`
- [ ] Criar repositório: `zentra-tech/zentra-api`
- [ ] Criar repositório: `zentra-tech/zentra-frontend`
- [ ] Configurar permissões e colaboradores

### Render - Backend
- [ ] Criar Web Service: `zentra-api`
- [ ] Conectar repositório: `zentra-tech/zentra-api`
- [ ] Configurar Build Command: `npm install`
- [ ] Configurar Start Command: `npm start`
- [ ] Adicionar Environment Variables:
  - [ ] `MONGODB_URI` (mesmo do atual)
  - [ ] `PORT=10000`
  - [ ] `ADMIN_USER=admin`
  - [ ] `ADMIN_PASS` (nova senha)
  - [ ] `ADMIN_NAME=Administrador Zentra Tech`
  - [ ] `ADMIN_TOKEN` (novo token)
  - [ ] `NODE_ENV=production`
- [ ] Aguardar deploy
- [ ] Anotar URL: `https://zentra-api.onrender.com/api`

### Render - Frontend
- [ ] Criar Static Site: `zentra-frontend`
- [ ] Conectar repositório: `zentra-tech/zentra-frontend`
- [ ] Configurar Build Command: `npm install && API_URL=${API_URL} npm run build:frontend`
- [ ] Configurar Publish Directory: `dist`
- [ ] Adicionar Environment Variable:
  - [ ] `API_URL=https://zentra-api.onrender.com/api`
- [ ] Aguardar deploy
- [ ] Anotar URL: `https://zentra-frontend.onrender.com`

---

## 🔧 FASE 2: Infraestrutura (2-3 dias)

### Código - Backend
- [ ] Clonar repositório atual localmente
- [ ] Criar novo diretório `zentra-api`
- [ ] Copiar código do projeto atual
- [ ] Remover `.git` antigo
- [ ] Inicializar novo Git
- [ ] Fazer primeiro commit
- [ ] Push para `zentra-tech/zentra-api`

### Código - Frontend
- [ ] Criar novo diretório `zentra-frontend`
- [ ] Copiar pasta `public/`
- [ ] Copiar `build-frontend.js`
- [ ] Copiar `package.json` (adaptar)
- [ ] Copiar `render-static.yaml`
- [ ] Inicializar Git
- [ ] Fazer primeiro commit
- [ ] Push para `zentra-tech/zentra-frontend`

### Testes Iniciais
- [ ] Verificar que backend novo está rodando
- [ ] Verificar que frontend novo está rodando
- [ ] Testar login no sistema novo
- [ ] Verificar conexão com MongoDB
- [ ] Verificar que dados estão acessíveis

---

## 🔄 FASE 3: Migração de Código (3-5 dias)

### Substituir Marca no Código
- [ ] `package.json`: Nome do projeto
- [ ] `README.md`: Títulos e textos
- [ ] `public/index.html`: Títulos, textos, branding
- [ ] `public/app.html`: Títulos, textos, branding
- [ ] `server.js`: Mensagens, nomes padrão
- [ ] Todos os arquivos HTML: Referências visuais
- [ ] Arquivos JavaScript: Textos e mensagens

### Criar Configurações Neutras
- [ ] Criar `config/branding.js`
- [ ] Atualizar código para usar `branding.js`
- [ ] Substituir hardcoded values por variáveis
- [ ] Testar que configurações funcionam

### Atualizar Variáveis de Ambiente
- [ ] Criar `.env.example` atualizado
- [ ] Documentar todas as variáveis
- [ ] Atualizar Render com novas variáveis

### Testes
- [ ] Testar todas as funcionalidades
- [ ] Verificar que não há referências antigas
- [ ] Testar em diferentes navegadores
- [ ] Verificar responsividade

---

## 🌐 FASE 4: Transição (1 dia)

### Domínio Customizado (Opcional)
- [ ] Comprar domínio: `zentratech.com.br`
- [ ] Configurar DNS:
  - [ ] `api.zentratech.com.br` → `zentra-api.onrender.com`
  - [ ] `app.zentratech.com.br` → `zentra-frontend.onrender.com`
- [ ] Configurar no Render
- [ ] Aguardar propagação DNS
- [ ] Testar acesso via domínio customizado

### Migração de Tráfego
- [ ] Decidir estratégia:
  - [ ] Migração gradual (recomendado)
  - [ ] Migração completa de uma vez
- [ ] Comunicar clientes (se necessário)
- [ ] Atualizar links/documentação
- [ ] Monitorar logs e erros
- [ ] Verificar que tudo funciona

### Backup
- [ ] Fazer backup do MongoDB
- [ ] Documentar configurações atuais
- [ ] Manter sistema antigo rodando por 1-2 semanas

---

## 🧹 FASE 5: Limpeza (1-2 dias)

### Desativar Sistema Antigo
- [ ] Confirmar que sistema novo está 100% funcional
- [ ] Aguardar 1-2 semanas de monitoramento
- [ ] Desativar `megaclean-system` no Render
- [ ] (Opcional) Arquivar repositório antigo

### Otimizações
- [ ] Configurar CI/CD (GitHub Actions)
- [ ] Configurar monitoramento (Sentry, etc.)
- [ ] Otimizar performance
- [ ] Configurar backups automáticos

### Documentação
- [ ] Atualizar README.md
- [ ] Documentar processo de deploy
- [ ] Documentar variáveis de ambiente
- [ ] Criar guias para novos desenvolvedores

---

## 🎯 Validação Final

- [ ] Sistema novo 100% funcional
- [ ] Sem referências a "MegaClean" no código
- [ ] URLs profissionais configuradas
- [ ] Zero downtime durante migração
- [ ] Dados preservados
- [ ] Clientes não afetados
- [ ] Documentação atualizada

---

## 📞 Suporte

Em caso de dúvidas, consulte:
- **Plano Completo**: `PLANO_MIGRACAO_ZENTRA_TECH.md`
- **Resumo Executivo**: `RESUMO_EXECUTIVO_MIGRACAO.md`

---

**Status**: ⏸️ Aguardando confirmação

**Próximo passo**: Revisar planos e confirmar início da Fase 1
