# 🔧 Corrigir Erros de Sintaxe nos Arquivos JS

## ❌ Problemas Identificados

1. **Erro "missing ) after argument list"**: Script de build quebrou template strings
2. **Erro "Unexpected token '<'"**: Arquivos JS retornando HTML (404) ao invés de JavaScript

---

## ✅ Solução: Desabilitar Substituições Automáticas

O script de build estava fazendo substituições que quebravam o código. Já desabilitei essas substituições.

**Agora os arquivos JS usam:**
- Caminhos relativos `/api` (funcionam quando servidos do mesmo domínio)
- Ou `window.API_BASE_URL` quando disponível

---

## 🚀 Próximos Passos

### 1. Fazer Novo Build Limpo

O build anterior gerou arquivos com erros. Precisamos fazer um novo build:

```bash
# Limpar pasta dist
rm -rf dist

# Fazer novo build
npm run build:frontend
```

**OU** no Render:
- Fazer **Manual Deploy** → **Deploy latest commit**
- Isso fará um novo build limpo

### 2. Verificar se Arquivos Estão Sendo Servidos

O erro "Unexpected token '<'" geralmente significa que:
- O arquivo JS não foi encontrado (404)
- O servidor está retornando HTML ao invés de JS

**Verificar:**
1. No Network tab, verifique se os arquivos `.js` estão sendo carregados
2. Se algum retornar 404, verifique se o arquivo existe no `dist/js/pages/`

---

## 🔧 Alternativa: Atualizar Arquivos Manualmente

Se o problema persistir, podemos atualizar os arquivos JS para usar `window.API_BASE_URL`:

**Exemplo:**
```javascript
// Antes:
const res = await fetch('/api/clientes', {...});

// Depois:
const apiBase = window.API_BASE_URL || '/api';
const res = await fetch(`${apiBase}/clientes`, {...});
```

---

## 📝 Ação Imediata

1. **Fazer novo build** (Manual Deploy no Render)
2. **Limpar cache** do navegador
3. **Verificar** se os erros desapareceram

---

**Status**: Script de build corrigido - fazer novo deploy! 🚀
