#!/bin/bash
# Setup AI Skills for WITP
# Creates symlinks from AI folders to skills/ in root

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS_SOURCE="$REPO_ROOT/skills"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

setup_symlink() {
    local target="$1"
    mkdir -p "$(dirname "$target")"
    rm -f "$target"
    ln -s "$SKILLS_SOURCE" "$target"
    echo -e "${GREEN}✓ $target -> skills/${NC}"
}

setup_agents() {
    setup_symlink "$REPO_ROOT/.agents/skills"
}

setup_agent() {
    setup_symlink "$REPO_ROOT/.agent/skills"
}

setup_claude() {
    setup_symlink "$REPO_ROOT/.claude/skills"
}

setup_gemini() {
    setup_symlink "$REPO_ROOT/.gemini/skills"
}

setup_codex() {
    setup_symlink "$REPO_ROOT/.codex/skills"
}

case "${1:-all}" in
    --agents) setup_agents ;;
    --agent) setup_agent ;;
    --claude) setup_claude ;;
    --gemini) setup_gemini ;;
    --codex)  setup_codex ;;
    --all)
        echo "Setting up AI skills for WITP..."
        setup_agents
        setup_agent
        setup_claude
        setup_gemini
        setup_codex
        echo ""
        echo -e "${GREEN}Done!${NC}"
        ;;
    *) echo "Usage: $0 [--agents|--agent|--claude|--gemini|--codex|--all]" ;;
esac
