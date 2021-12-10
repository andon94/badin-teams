<template>
  <div class="base-modal"
       v-if="visible">
    <div class="modal">
      <div class="modal-header"
           v-if="header">
        <span>
          {{header}}
        </span>
        <span @click="close"
              class="close-icon">
          <svg-icon type="mdi"
                    :path="path.close">
          </svg-icon>
        </span>
      </div>
      <div class="modal-content"
           v-if="content">
        {{content}}
      </div>
      <div class="button-container">
        <BaseButton :text="primary.text"
                    v-if="primary.text"
                    class="primary"
                    type="button"
                    @click="primaryAction"
                    :disabled="primary.disabled"/>
        <div class="secondary">
          <BaseButton :text="secondary.text"
                      v-if="secondary.text"
                      type="button"
                      @click="secondaryAction"
                      :disabled="secondary.disabled"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

export default {
  name: 'Modal',
  components: {
    BaseButton,
    SvgIcon
  },
  props: {
    header: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    primary: {
      type: Object,
      default: () => {}
    },
    secondary: {
      type: Object,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      path: {
        close: mdiClose
      }
    }
  },
  methods: {
    primaryAction () {
      this.$emit('primaryAction')
    },
    secondaryAction () {
      this.$emit('secondaryAction')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
.base-modal {
  position: fixed;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 100;

  .modal {
    width: 340px;
    backdrop-filter: blur(10px);
    background-color: rgba($light, 0.2);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    padding: 20px;

    &-header {
      color: $light;
      font-weight: bold;
      margin-bottom: 20px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: default;

      .close-icon {
        cursor: pointer;
      }
    }

    &-content {
      margin: 30px 0;
      color: $light;
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .secondary {
        /deep/ button {
          background: none;
          border: 3px solid $light;
          color: $error;
          &:hover:enabled {
            background: $error;
            color: $white;
          }
        }
      }
    }
  }
}
</style>