<template>
  <div class="container">
    <div class="row align-items-center vh-100">
      <div class="col-sm-8 col-md-6 m-auto">
        <div class="card border-0 shadow">
          <div class="card-body">
            <div class="text-center my-1">
              <router-link class="text-decoration-none" to="/">
                <span class="logo fs-1">AusTour</span>
              </router-link>
            </div>

            <form class="">
              <div class="my-4">
                <label for="email" class="form-label">
                  Email
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="email"
                  />
                </label>
              </div>
              <div class="my-4">
                <label for="password" class="form-label">
                  Password
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="password"
                  />
                </label>
              </div>
              <div class="text-center mt-3">
                <button class="btn btn-primary">登入</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
