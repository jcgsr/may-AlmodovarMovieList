import { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`${filme.id}.json`);
      console.log(response);

      if (response.data.length === 0) {
        history.replace("/");
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();
  }, [history, id]);

  return <h1>{filme.filme}</h1>;
}
