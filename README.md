<img src="https://lh3.googleusercontent.com/fife/AAbDypCwkziY2OAR1vQxJAqVhbV94Ilr6VUn_ggIgNlBML7dEkQuxs8zNWYSb1BXpslQR4TVfbHGOtOveqgyDNxZRBkn3ltRcclpzdV91nj00nmeVi8yY_mv72sOjymO9WTvcgRyBDB0GngL3EdG_DCh2i8WVOFqA1s8-YRPyIhr_p8DKV7WZtHgIkLveuSwOBTa0cmhH-oxmPygQ9hofOu-4TpoVytu1aFOT5if_i-52B9mhBCKMVTVg2cGrcrOHwgVso3xnrYT2pDxJ-97BB1AbFmkRzR8PU_Q2HJKI1ZqucAYt4ANBk6hX6mkWylpalIwr0wPnYyVOeK0mjnIWzd3ITHx37sLwdEnMF-m7RE1ssqKCvxbJ0OIrABowDrhUg7BTG8O4QqKjc8yj6-1CVfvTxVNORJUiIRuSxS9ULJsikfBpVhjaZQHAWxkLiEPRd_6WJVLls2QALryJrwPs9xdxPQI9sWRzEFFr9LFkAlKK2-sGRR6GymnBoiPJK2eyrJKXV_YiGFRAS4XAAXICBTKnGJMaYvrsUzaJY7ELaicVfx946hAMg8xrncR6Ja1m38YvF3eJGOK1nEV7yz9EK8zttDTU8Va7NhlWHl7UKIgAKuNPKwzWxicrttEaoPVZwJV5XaQIeBG97SYp0eykaEdL_5rTF3cmBhIHGLInX9f2nPegC56cz76-_yyfSuQSHKEVLwiYCKrYIjk8rBnNVsIqtOP2z0As7QcVuxx1X61AIDoodtZ_UqPfo5MoZblkKMXYjIx1RDLH421u_CVOBsLOD0psZlG_P9KjyDVMEALeAlXrhx3wYp6U_YYWXQB_9kOvN37uqb67LMVgl77aGU5G0stkDqmH60_Kx1gc85uqaGJN3SLk4d7Hz8x1SSF99jQLyLYs2BhaEuSOXpEkpmRzxrwa_mDDjz3r-WiOCOAlTQfteptiOVZzHCa0JZTUZ_naRL6833HRpEYUHxY7dQmqh4Zbyk8dmVLLIvqV8RpjjOvyJwsu6v1Z865nhqytD0qdEoGaPBoZShTiokRbqnEZNoDOUBvuVmxJn2tbGY1VhWz89pH0QVTXSUotf4kZHPqw0yzpd5gHYRIywTeddcldEnig2QbRhSTMUlmoTQsrhlBySmX7pf0lSC3Myw4s0iZAJrNXyScSt5bESLg6Nsv24TY5qn19FiYkacYQ3qOgyiEsHtifKbJuuTezFcEwQqBMw54ZHEtr-s8Laa69AqCekEMNaVgNcBO1HJzZVnoQVFfpp_D-nwldO2Fg2olExXJq0J5iOXP3bvlYQBN12wXJdlUp6lKIz23Us7zPTqkcUIdFBz1xTMwUpqtEJOtOnIg-GTwG2egrcafrheQoGF6mTWbk9mrNEWWqmwKWBlFVZqHjaN0cf6_JpYWXhJVvQFsxwnFKxhYI2iGqMoy8095JvVvKMh_mrwa3ktF3uVJYmGHUzE_nHfPFyNsRA=w2000-h756" alt="" style="margin-bottom: 20px;"/>

SSG (static site generator) is a boilerplate project. It comes with a few loaders and templates built already to give examples on how everything works.

The core directory of this project contains all the code that handles generating and routing the site. This has been left as a part of the code as to not limit what you can modify.

In this setup, the site directory contains all of your loaders, scss, frontend ts, static files and Liquid files. Everything is configurable however, in case you want to change any of this up.


## Scripts

```
npm run dev
```

> This spins up an Express server where you can access your site. The default port is 3000, but can set with the PORT environment variable.

```
npm run build
```

> This will statically generate your site, and dump it in a build directory.

## Learn more about

- [Config](core/markdown/config.md)
- [Routes](core/markdown/routes.md)
- [Tags & Filters](core/markdown/tags-and-filters.md)


## Notes

- This boilerplate has a Laravel mix setup to compile SCSS and TS. If this is not your prefered build tool, feel free to swap it out for something else.
