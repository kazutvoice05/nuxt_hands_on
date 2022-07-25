export default function ({ store, redirect }) {
    if (!store.getters['isAdminUser']) {
        return redirect('/')
    }
}
