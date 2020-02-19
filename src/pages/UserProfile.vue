<template>                                        <!--UserProfile页-->
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>        <!--个人信息表单  EditProfileForm组件-->
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>                                                      <!--右边 用户显示卡组件UserCard-->
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";

export default {
  components: {
    EditProfileForm,
    UserCard
  }
};
</script>
