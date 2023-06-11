<script lang="ts">
  import './Modal.css';
  import { onMount } from 'svelte';
  import { ModalLocation } from '$lib/types';
  import { AVATAR_SIZE } from '$lib/constants';
  import { isLoading } from '$lib/stores';

  const LOCATIONS = [
    'top',
    'right',
    'bottom',
    'left',
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left'
  ];

  export let location: ModalLocation = ModalLocation.bottom;
  export let avatarSize: string = AVATAR_SIZE;

  let showModal = false;
  let modalRef: HTMLDivElement | null = null;
  let clazz = '';
  export let style = '';
  export { clazz as class };

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef && !modalRef.contains(event.target as Node)) {
        setShowModal(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  function setShowModal(show: boolean) {
    showModal = show;
  }
</script>

<div
  class="othent-login-button othent-modal {clazz}"
  on:click={() => setShowModal(!showModal)}
  style={`
		width: ${avatarSize};
		height: ${avatarSize};
		${style}
	`}
  bind:this={modalRef}
  {...$$restProps}
>
  <div class="avatar-wrapper">
    {#if $isLoading}
      <div class="overlay">
        <div class="avatar-loading-border">
          <div class="loading-border" />
        </div>
      </div>
    {/if}
    <slot name="avatar">Show Modal</slot>
  </div>
  {#if showModal}
    <div class="othent-modal-children othent-modal-children-{LOCATIONS[location]}">
      <slot>Modal Content</slot>
    </div>
  {/if}
</div>
