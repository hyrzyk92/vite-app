<script setup lang="ts">
  import { getConfig } from "../utils/api"; 
  import { ElMessage } from 'element-plus'

  const res = await getConfig()
  console.log(res)
  ElMessage.success('scuuess')
</script>
