import request from "axios";

setTimeout(
  console.log.bind(
    console,
    "%c Desenvolvido por Humberto Martins {Agência Consilio} %c",
    "background: #0c2939;color:#FFF;padding:5px;line-height: 8px;border-radius: 5px;font-family:Poppins;font-weight: 600;",
    ""
  )
);
console.log("");

export default {
  baseUrl: process.env.baseUrl,

  getInfo() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("info").then(response => {
        const data = response.data;
        if (response.status === 200) {
          const filtered = {
            data: {
              title: data.blogName,
              description: data.blogDescription,
              keywords: data.keywords,
              contentUrl: data.contentUrl,
              domain: data.domain,
              maintenance: data.maintenance,
              copyright: data.copyright,
              footer_box: data.footer_box,
              phone: data.phone,
              whatsapp: data.whatsapp,
              email: data.email,
              address: data.address,
              facebook: data.facebook,
              instagram: data.instagram,
              linkedin: data.linkedin,
              youtube: data.youtube,
              twitter: data.twitter,
              favicon: data.favicon,
              login_logo: data.login_logo,
              width_login_logo: data.width_login_logo,
              height_login_logo: data.height_login_logo,
              logo: data.logo,
              thumbnail_default: data.thumbnail,
              login_css: data.login_css,
              global_css: data.global_css,
              google_analytics: data.google_analytics,
              google_tag_manager: data.google_tag_manager,
              getAllCountArticle: data.getAllCountArticle,
              getAllCountCat: data.getAllCountCat,
              getAllCountPage: data.getAllCountPage,
              getAllCountTag: data.getAllCountTag,
              templeteUrl: data.templeteUrl,
              themeDir: data.themeDir,
              wpVersion: data.wpVersion,
              linkWp: data.wp
            }
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

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

  getCases() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("case").then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              slug: item.slug,
              img: item.quick_img,
              client: item.client
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

  getTestimonials() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("testimonial").then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              excerpt: item.excerpt.rendered,
              slug: item.slug,
              img: item.quick_img,
              customer_testimonial: item.customer_testimonial,
              complement_customer_testimonial:
                item.complement_customer_testimonial
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

  getTeam() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("team").then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              slug: item.slug,
              img: item.quick_img,
              custom_fields: item.custom_fields
            }))
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
  },

  getClients() {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request.get("client").then(response => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
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
            id: data.id,
            date: data.date,
            date_gmt: data.date_gmt,
            slug: data.slug,
            status: data.status,
            title: data.title.rendered,
            excerpt: data.excerpt.rendered,
            link: data.link,
            content: data.content.rendered,
            author: data.author,
            custom_fields: data.custom_fields
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

  getPosts(page, per_page) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl;
      request
        .get(`posts?_embed`, {
          params: {
            page: page ? page : 1,
            per_page: per_page ? per_page : 5
          }
        })
        .then(response => {
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
                slug: item.slug,
                date: item.date,
                date_gmt: item.date_gmt,
                author: item.author,
                author_name: item._embedded.author[0].name,
                author_img: item._embedded.author[0].avatar_urls["24"],
                status: item.status,
                img: item.quick_img
              }))
            };
            resolve(filtered);
          } else {
            reject(response);
          }
        })
        .catch(error => console.log(error))
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
