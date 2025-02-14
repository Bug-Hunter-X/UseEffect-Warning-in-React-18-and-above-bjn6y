```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Log only when count changes
    console.log('count changed to:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```