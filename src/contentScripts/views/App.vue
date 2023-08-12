<script setup lang="ts">
import { checkURLsStartWith } from '~/logic/check-website'
import { addJobinjaLink, addJobvisionLink } from '~/logic/websites'

onMounted(() => {
  if (!checkURLsStartWith(document.location.href))
    return

  switch (checkURLsStartWith(document.location.href)) {
    case 'jobinja':
      addJobinjaLink()
      break
    case 'jobvision':
      console.log('aa')

      addJobvisionLink()
      break
  }
})
</script>
