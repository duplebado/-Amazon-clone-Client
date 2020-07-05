<template>
  <main>
    <!-- Breadcrumbs -->
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <ul class="a-unordered-list a-horizontal a-size-small">
        <li>
          <span class="a-list-item">
            <a href="#" class="a-link-normal a-color-tertiary">category</a>
          </span>
        </li>
        <li>
          <span class="a-list-item">></span>
        </li>
        <li>
          <span class="a-list-item">
            <a href="#" class="a-link-normal a-color-tertiary">Product Title</a>
          </span>
        </li>
      </ul>
    </div>

    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Image -->
              <div class="imgBlock">
                <div class="eBooksimg">
                  <img src="/img/einstein.jpg" class="img-fluid" />
                </div>
              </div>

              <!-- Follow Author -->
              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Follow The Author</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <!-- Author Image -->
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img
                            src="/img/einstein.jpg"
                            alt=""
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>

                    <!-- Author's Name -->
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">Walter Isaacson</a>
                      </div>
                    </div>

                    <!-- Author's Follow Button -->
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
