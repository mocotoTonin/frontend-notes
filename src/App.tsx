import { useEffect, useState } from "react";
import "./App.css";

interface Nota {
  id: string;
  titulo: string;
  texto: string;
  criadoEm: string;
}

const API_URL = "https://api-notes-12qm.onrender.com/api/notes";

function App() {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const carregarNotas = async () => {
    try {
      const resposta = await fetch(API_URL);
      const dados = await resposta.json();
      setNotas(dados);
    } catch (erro) {
      console.error("Erro ao carregar notas:", erro);
    }
  };

  useEffect(() => {
    carregarNotas();
  }, []);

  const salvarNota = async () => {
    if (!titulo.trim() || !texto.trim()) {
      alert("Preencha o título e o texto.");
      return;
    }

    try {
      if (editandoId) {
        await fetch(`${API_URL}/${editandoId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo,
            texto,
          }),
        });

        setEditandoId(null);
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo,
            texto,
          }),
        });
      }

      setTitulo("");
      setTexto("");

      carregarNotas();
    } catch (erro) {
      console.error("Erro ao salvar nota:", erro);
    }
  };

  const editarNota = (nota: Nota) => {
    setTitulo(nota.titulo);
    setTexto(nota.texto);
    setEditandoId(nota.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const excluirNota = async (id: string) => {
    const confirmar = window.confirm(
      "Deseja realmente excluir esta nota?"
    );

    if (!confirmar) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      carregarNotas();
    } catch (erro) {
      console.error("Erro ao excluir nota:", erro);
    }
  };

  const cancelarEdicao = () => {
    setEditandoId(null);
    setTitulo("");
    setTexto("");
  };

  return (
    <div className="app">

      <header className="header">
        <div className="logo">
          NOTES<span>.</span>
        </div>

        <div className="header-info">
          <span>API REST</span>
          <span>REACT + TSX</span>
        </div>
      </header>

      <main>


        <section className="notes-section">

          <div className="section-header">
            <div>
              <span className="section-tag">
                {editandoId ? "EDITANDO NOTA" : "NOVA NOTA"}
              </span>

              <h2>
                {editandoId
                  ? "Editar nota"
                  : "Criar uma nota"}
              </h2>
            </div>
          </div>

          <div className="form">

            <div className="input-group">

              <label htmlFor="titulo">
                TÍTULO
              </label>

              <input
                id="titulo"
                type="text"
                placeholder="Digite o título da nota..."
                value={titulo}
                onChange={(e) =>
                  setTitulo(e.target.value)
                }
              />

            </div>

            <div className="input-group">

              <label htmlFor="texto">
                CONTEÚDO
              </label>

              <textarea
                id="texto"
                placeholder="Escreva sua nota..."
                value={texto}
                onChange={(e) =>
                  setTexto(e.target.value)
                }
              />

            </div>

            <div className="form-actions">

              <button
                className="primary-button"
                onClick={salvarNota}
              >
                {editandoId
                  ? "SALVAR ALTERAÇÕES"
                  : "ADICIONAR NOTA"}
              </button>

              {editandoId && (
                <button
                  className="cancel-button"
                  onClick={cancelarEdicao}
                >
                  CANCELAR
                </button>
              )}

            </div>

          </div>

        </section>

        <section className="notes-list">

          <div className="section-header">

            <div>
              <span className="section-tag">
                SEU ARQUIVO
              </span>

              <h2>
                Notas recentes
              </h2>
            </div>

            <span className="counter">
              {notas.length.toString().padStart(2, "0")}
            </span>

          </div>

          <div className="cards">

            {notas.length === 0 ? (

              <div className="empty">
                <p>
                  Nenhuma nota encontrada.
                </p>
              </div>

            ) : (

              notas.map((nota) => (

                <article
                  className="note-card"
                  key={nota.id}
                >

                  <div className="note-top">

                    <span className="note-number">
                      #{nota.id.slice(-4)}
                    </span>

                    <span className="note-date">
                      {new Date(
                        nota.criadoEm
                      ).toLocaleDateString("pt-BR")}
                    </span>

                  </div>

                  <h3>
                    {nota.titulo}
                  </h3>

                  <p>
                    {nota.texto}
                  </p>

                  <div className="note-actions">

                    <button
                      onClick={() =>
                        editarNota(nota)
                      }
                    >
                      EDITAR
                    </button>

                    <button
                      onClick={() =>
                        excluirNota(nota.id)
                      }
                    >
                      EXCLUIR
                    </button>

                  </div>

                </article>

              ))

            )}

          </div>

        </section>

      </main>

      <footer className="footer">

        <span>
          DEVHUB / NOTES
        </span>

        <span>
          REACT • TYPESCRIPT • EXPRESS
        </span>

      </footer>

    </div>
  );
}

export default App;