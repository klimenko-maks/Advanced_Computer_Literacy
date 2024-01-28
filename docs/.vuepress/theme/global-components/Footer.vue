<template>
  <footer v-if="$page.path" class="footer" :class="checkSidebarAuto">
    <div class="icons">
      <div class="no-wrap-icons">
          <a
            href="https://github.com/klimenko-maks/KPKU_Advanced"
            target="_blank"
            rel="noopener noreferrer"
          ><vp-icon name="GitHub"></vp-icon>
          </a>
          <a
            href="https://www.youtube.com/@PlanetPerspective/playlists"
            target="_blank"
            rel="noopener noreferrer"
          ><vp-icon name="YouTube"></vp-icon>
          </a>
          <a
            href="https://t.me/razumnoemishlenie"
            target="_blank"
            rel="noopener noreferrer"
            ><vp-icon name="Telegram"></vp-icon>
          </a>
      </div>
    </div>
    <p class="made-by">
      Copyright © 2023-present <span class="emoji-wrap">KPKU with ❤️</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    checkSidebarAuto: function() {
      return {
        'is-sidebar-active':
          this.$route.path.includes('/resources/') ||
          this.$page.regularPath.includes('_posts')
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~rfs/stylus'

.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 1rem 1rem 1rem
  .icons
    display: flex
    align-items: center
    margin-bottom: 0.25rem
    // min-width: 12.5rem
    font-size: 2rem
    .no-wrap-icons
      display: inline-flex
    .wrap-icons
      display: inline-flex
    svg
      fill: $textColor
    svg:hover
      fill: $accentColor
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
    margin-right: 2.3437rem
    margin-left: 2.3437rem
    margin-bottom: 1rem
  .made-by
    text-align: center
    margin: 0
    margin-top: auto
    text-align: center
    font-size: 0.95rem
.is-sidebar-active
  padding-left: 22.5rem

@media (max-width: $MQNarrow)
  .is-sidebar-active
    padding-left: 18.9rem

@media (max-width: 61.25rem)
  .is-sidebar-active
    padding-left: 2.5rem

@media (min-width: 61.3125rem) and (max-width: 72.9375rem)
  .is-sidebar-active
    .icons
      flex-wrap: wrap
      .no-wrap-icons
        width: 100%
        justify-content: space-between
      .wrap-icons
        padding-top: 1.75rem
        width: 100%
        justify-content: space-evenly
        a:nth-child(1)
          margin-left: 0
          rfs-margin-right(2.6875rem)
        a:nth-child(2)
          margin-left: 0

@media (max-width: 39.0625rem)
  .icons
    flex-wrap: wrap
    .no-wrap-icons
      width: 100%
      justify-content: space-between
    .wrap-icons
      padding-top: 1.75rem
      width: 100%
      justify-content: space-evenly
      a:nth-child(1)
        margin-left: 0
        rfs-margin-right(4.6875rem)
      a:nth-child(2)
        margin-left: 0
</style>
