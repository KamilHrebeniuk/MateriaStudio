const delayedClick = async (context, router, event) => {
  console.log(event);
  event.preventDefault();
  context.setChanging(true);
  setTimeout(() => {
    router.push(event.target.href);
    setTimeout(() => {
      context.setChanging(false);
    }, 400);
  }, 400);
};

export default delayedClick;
