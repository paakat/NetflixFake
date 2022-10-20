import axios from "axios";

import ITutorialData from "./serviceType";

var http = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

/*
//import http from "../http-common";

interface ITutorialData {
  id?: any | null,
  title: string,
  description: string,
  published?: boolean,
}
*/

class TutorialDataService 
{
  getAll() 
  {
    return http.get<Array<ITutorialData>>("/tutorials");
  }

  get(id: string) 
  {
    return http.get<ITutorialData>(`/tutorials/${id}`);
  }

  create(data: ITutorialData) 
  {
    return http.post<ITutorialData>("/tutorials", data);
  }

  update(data: ITutorialData, id: any) 
  {
    return http.put<any>(`/tutorials/${id}`, data);
  }

  delete(id: any) 
  {
    return http.delete<any>(`/tutorials/${id}`);
  }

  deleteAll() 
  {
    return http.delete<any>(`/tutorials`);
  }

  findByTitle(title: string) 
  {
    return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
  }

}

export default new TutorialDataService();

/*
/Users/poderozita/z2022_2/REPOSITORY/NOVAREPOTENTIAL/ToGIT/ZIPS/ReactAxiosTypeScript/src
*/
