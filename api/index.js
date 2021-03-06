import axios from 'axios';

setTimeout(
    console.log.bind(
        console,
        '%c Desenvolvido por Humberto Martins {Agência Consilio} %c',
        'background: #0c2939;color:#FFF;padding:5px;line-height: 8px;border-radius: 5px;font-family:Poppins;font-weight: 600;',
        ''
    )
);
console.log('');

const request = axios.create({
    baseURL: process.env.API_URL
});

export default {
    getInfo() {
        return new Promise((resolve, reject) => {
            
            request.get('info').then(response => {
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
                            others_scripts: data.others_scripts,
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
            
            request.get('menu-principal').then(response => {
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

    getRoutes() {
        return new Promise((resolve, reject) => {
            
            request.get('routes').then(response => {
                const data = [...response.data];
                if (response.status === 200 && response.data.length > 0) {
                    const filtered = {
                        data: data.map(item => ({
                            id: item.id,
                            name: item.name,
                            type: item.type,
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

    getSlides() {
        return new Promise((resolve, reject) => {
            
            request.get('slider').then(response => {
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

    getCases() {
        return new Promise((resolve, reject) => {
            
            request.get('case').then(response => {
                const data = [...response.data];
                if (response.status === 200 && response.data.length > 0) {
                    const filtered = {
                        data: data.map(item => ({
                            id: item.id,
                            title: item.title.rendered,
                            content: item.content.rendered,
                            slug: item.slug,
                            img: item.quick_img,
                            client: item.client,
                            url: item.url,
                            button: item.button
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
            
            request.get('testimonial').then(response => {
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
            
            request.get('team').then(response => {
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
            
            request.get('client').then(response => {
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
                        img: data.quick_img,
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
            
            const params = {
                params: {
                    ...(slug ? { 'filter[name]': slug } : {})
                }
            };
            request.get('posts?_embed', params).then(response => {
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
                        title: data.title.rendered,
                        categories: data.categories,
                        tags: data.tags,
                        post_categories: data.post_categories,
                        post_tags: data.post_tags,
                        author_name: data._embedded.author[0].name,
                        author_img: data._embedded.author[0].avatar_urls['48'],
                        author_slug: data._embedded.author[0].slug,
                        author_description: data._embedded.author[0].description,
                        status: data.status,
                        img: data.quick_img,
                        next: data.next,
                        previous: data.previous
                    };
                    resolve(filtered);
                } else {
                    reject(response);
                }
            });
        });
    },

    getPosts(page, per_page, category, tag, author) {
        return new Promise((resolve, reject) => {
            
            const params = {
                params: {
                    ...(page ? { page: page } : { page: 1 }),
                    ...(per_page ? { per_page: per_page } : { per_page: 5 }),
                    ...(category ? { 'filter[category_name]': category } : {}),
                    ...(tag ? { 'filter[tag]': tag } : {}),
                    ...(author ? { author: author } : {})
                }
            };
            request
                .get('posts?_embed', params)
                .then(response => {
                    const data = [...response.data];
                    if (response.status === 200 && response.data.length > 0) {
                        const filtered = {
                            response_status: response.status,
                            total: response.headers['x-wp-total'],
                            totalPages: response.headers['x-wp-totalpages'],
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
                                author_img: item._embedded.author[0].avatar_urls['24'],
                                status: item.status,
                                img: item.quick_img,
                                categories: item.categories,
                                tags: item.tags,
                                post_categories: item.post_categories,
                                post_tags: item.post_tags,
                                next: item.next,
                                previous: item.previous
                            }))
                        };
                        resolve(filtered);
                    } else {
                        reject(response);
                        console.log('Erro (promisse): ' + response);
                    }
                })
                .catch(error => console.log(error));
        });
    },

    getStrategy(slug) {
        return new Promise((resolve, reject) => {
            
            const params = {
                params: {
                    ...(slug ? { 'filter[name]': slug } : {})
                }
            };
            request.get('strategy?_embed', params).then(response => {
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
                        title: data.title.rendered,
                        categories: data.categories,
                        tags: data.tags,
                        author_name: data._embedded.author[0].name,
                        author_img: data._embedded.author[0].avatar_urls['48'],
                        author_slug: data._embedded.author[0].slug,
                        author_description: data._embedded.author[0].description,
                        status: data.status,
                        img: data.quick_img
                    };
                    resolve(filtered);
                } else {
                    reject(response);
                }
            });
        });
    },

    getStrategies(page, per_page, category, tag, author) {
        return new Promise((resolve, reject) => {
            
            const params = {
                params: {
                    ...(page ? { page: page } : { page: 1 }),
                    ...(per_page ? { per_page: per_page } : { per_page: 5 }),
                    ...(category ? { 'filter[category_name]': category } : {}),
                    ...(tag ? { 'filter[tag]': tag } : {}),
                    ...(author ? { author: author } : {})
                }
            };
            request
                .get('strategy?_embed', params)
                .then(response => {
                    const data = [...response.data];
                    if (response.status === 200 && response.data.length > 0) {
                        const filtered = {
                            response_status: response.status,
                            total: response.headers['x-wp-total'],
                            totalPages: response.headers['x-wp-totalpages'],
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
                                author_img: item._embedded.author[0].avatar_urls['24'],
                                status: item.status,
                                img: item.quick_img,
                                categories: item.categories,
                                tags: item.tags
                                //post_categories: item.post_categories,
                                //post_tags: item.post_tags
                            }))
                        };
                        resolve(filtered);
                    } else {
                        reject(response);
                        console.log('Erro (promisse): ' + response);
                    }
                })
                .catch(error => console.log(error));
        });
    },

    getCategory(slug) {
        return new Promise((resolve, reject) => {
            
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
    getCategories(page, per_page) {
        return new Promise((resolve, reject) => {
            
            const params = {
                params: {
                    ...(page ? { page: page } : { page: 1 }),
                    ...(per_page ? { per_page: per_page } : { per_page: 5 })
                }
            };
            return request.get('categories', params).then(response => {
                const data = [...response.data];
                if (response.status === 200 && response.data.length > 0) {
                    const filtered = {
                        total: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                        data: data
                    };
                    resolve(filtered);
                } else {
                    reject(response);
                }
            });
        });
    },
    getTags(page, per_page) {
        return new Promise((resolve, reject) => {
            
            const params = {
                params: {
                    ...(page ? { page: page } : { page: 1 }),
                    ...(per_page ? { per_page: per_page } : { per_page: 20 })
                }
            };
            return request.get('tags', params).then(response => {
                const data = [...response.data];
                if (response.status === 200 && response.data.length > 0) {
                    const filtered = {
                        total: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                        data: data
                    };
                    resolve(filtered);
                } else {
                    reject(response);
                }
            });
        });
    },
    getAuthors() {
        return new Promise((resolve, reject) => {
            
            return request.get('users').then(response => {
                const data = [...response.data];
                if (response.status === 200 && response.data.length > 0) {
                    const filtered = {
                        response_status: response.status,
                        total: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                        data: data.map(item => ({
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            img: item.avatar_urls['96'],
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
    getAuthor(slug) {
        return new Promise((resolve, reject) => {
            
            const params = {
                params: {
                    ...(slug ? { slug: slug } : {})
                }
            };
            return request.get('users', params).then(response => {
                const data = [...response.data][0];
                if (response.status === 200 && response.data.length > 0) {
                    const filtered = {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        img: data.avatar_urls['96'],
                        slug: data.slug
                    };
                    resolve(filtered);
                } else {
                    reject(response);
                }
            });
        });
    }
};
