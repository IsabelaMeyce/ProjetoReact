const EstudantesPage = () => {
  const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);

  useEffect(() => {
    if (listaStorage) {
      setLista(JSON.parse(listaStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("estudantes", JSON.stringify(lista));
  }, [lista]);

  return (
    <>
      <Formulario setLista={setLista} lista={lista} />
      <ListaDeEstudantes lista={lista} />
    </>
  );
};