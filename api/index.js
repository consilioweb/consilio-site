import request from "axios";

setTimeout(console.log.bind(console, "%c Desenvolvido por Humberto Martins (Agência Consilio) %c", "background: #0c2939;color:#FFF;padding:5px;line-height: 8px;border-radius: 5px;font-family:Poppins;font-weight: 600;", ""));
console.log("");

export default {
  baseUrl: "http://api.consilio.com.br/wp-json/wp/v2/",

  getMainMenu() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("menu-principal").then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            data: data.map(item => ({
              id: item.id,
              title: item.title,
              status: item.post_status,
              order: item.menu_order,
              url: item.url,
              target: item.target
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

  getSlides() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("slider").then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              slug: item.slug,
              img: item.quick_img
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

  getPage(slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get(`pages?slug=${slug}`).then(response => {
        const data = [...response.data][0];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },
  getPost(slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get(`posts?slug=${slug}`).then(response => {
        const data = [...response.data][0];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

  getPosts() {
    console.log("Request to posts");
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get(`posts`).then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            total: response.headers["x-wp-total"],
            totalPages: response.headers["x-wp-totalpages"],
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              excerpt: item.excerpt.rendered,
              slug: item.slug
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },
  getCategory(slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      return request
        .get(`categories?slug=${slug}`)
        .then(response => {
          const data = [...response.data][0];
          if (response.status === 200) {
            return {
              id: data.id,
              name: data.name,
              slug: data.slug
            };
          }
        })
        .then(category => {
          return request
            .get(`posts?categories=${category.id}`)
            .then(response => {
              const data = [...response.data];
              if (response.status === 200) {
                category.posts = data.map(item => ({
                  id: item.id,
                  title: item.title.rendered,
                  content: item.content.rendered,
                  excerpt: item.excerpt.rendered,
                  slug: item.slug
                }));
                resolve(category);
              } else {
                reject(response);
              }
            });
        });
    });
  },
  getCategories(slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      return request.get(`categories`).then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          resolve(data);
        }
      });
    });
  }
};